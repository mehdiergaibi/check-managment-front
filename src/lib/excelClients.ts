import xlsx, { IJsonSheet } from "json-as-xlsx";
export function dowloadExcel(dt: any, file: string, sheet: string) {
  let columns: IJsonSheet[] = [
    {
      sheet: sheet,
      columns: [
        { label: "Name", value: "name" },
        { label: "Address", value: "address" },
        { label: "Phone", value: "phoneNumber" },
        { label: "Note", value: "note" },
      ],
      content: dt,
    },
  ];
  let settings = {
    fileName: file,
  };
  xlsx(columns, settings);
}
