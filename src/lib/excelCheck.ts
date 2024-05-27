import xlsx, { IJsonSheet } from "json-as-xlsx";
export function dowloadExcel(dt: any, file: string, sheet: string) {
  let columns: IJsonSheet[] = [
    {
      sheet: sheet,
      columns: [
        { label: "Client", value: "client" },
        { label: "Check Amount", value: "CheckAmount" },
        {
          label: "Deposite Date",
          value: (row) =>
            new Date(row.DepositDate as string).toLocaleDateString(),
        },
        { label: "Deposite Status", value: "DepositStatus" },
        { label: "Bank Name", value: "BankName" },
        { label: "Check Number", value: "CheckNumber" },
      ],
      content: dt,
    },
  ];
  let settings = {
    fileName: file,
  };
  xlsx(columns, settings);
}
