import { Check } from "@/types/Check";
import { ColumnDef } from "@tanstack/react-table";

export const CheckColums: ColumnDef<Check>[] = [
  {
    header: "Client",
    accessorKey: "client",
  },
  {
    header: "Check Amount",
    accessorKey: "check_amount",
  },
  {
    header: "Deposite Date",
    accessorKey: "deposite_date",
  },
  {
    header: "Deposite Status",
    accessorKey: "deposite_status",
  },
  {
    header: "Bank Name",
    accessorKey: "bank_name",
  },
  {
    header: "Check Number",
    accessorKey: "check_number",
  },
  {
    header: "Actions",
    accessorKey: "actions",
  },
];
