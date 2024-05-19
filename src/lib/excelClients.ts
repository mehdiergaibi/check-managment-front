import xlsx, { IJsonSheet } from "json-as-xlsx";
export function dowloadExcel(dt: any, file: string, sheet: string) {
  let columns: IJsonSheet[] = [
    {
      sheet: sheet,
      columns: [
        { label: "Name", value: "Name" },
        { label: "Address", value: "Address" },
        { label: "Phone", value: "Phone" },
        { label: "Note", value: "Note" },
      ],
      content: dt,
    },
  ];
  let settings = {
    fileName: file,
  };
  xlsx(columns, settings);
}
