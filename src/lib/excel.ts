import { dt } from "@/compos/pages/checks/page";
import xlsx, { IJsonSheet } from "json-as-xlsx";
export function dowloadExcel() {
  let columns: IJsonSheet[] = [
    {
      sheet: "Checks",
      columns: [
        { label: "Client", value: "Client" },
        { label: "Check Amount", value: "CheckAmount" },
        {
          label: "Deposite Date",
          value: (row) => new Date(row.DepositeDate).toLocaleDateString(),
        },
        { label: "Deposite Status", value: "DepositeStatus" },
        { label: "Bank Name", value: "BankName" },
        { label: "Check Number", value: "CheckNumber" },
      ],
      content: dt,
    },
  ];
  let settings = {
    fileName: "Checks",
  };
  xlsx(columns, settings);
}
