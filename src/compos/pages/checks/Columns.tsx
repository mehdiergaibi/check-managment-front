import { Button } from "@/components/ui/button";
import DeleteDialoge from "@/compos/DeleteDialoge";
import { Check } from "@/types/Check";
import { ColumnDef } from "@tanstack/react-table";
import { RiExpandUpDownFill } from "react-icons/ri";
import EditCheck from "./EditCheck";
import { cn } from "@/lib/utils";

export const CheckColums: ColumnDef<Check>[] = [
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Client
          <RiExpandUpDownFill className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "Client",
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Check Amount
          <RiExpandUpDownFill className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "CheckAmount",
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Deposite Date
          <RiExpandUpDownFill className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "DepositeDate",
    cell: ({ row }) => {
      const depositeDate = row.getValue("DepositeDate");
      const formatted = new Date(depositeDate as string).toLocaleDateString();
      return formatted;
    },
  },
  {
    header: "Deposite Status",
    accessorKey: "DepositeStatus",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-[16px] text-black w-fit px-4 py-2 rounded-lg", {
            "bg-red-500": row.getValue("DepositeStatus") === "Not Deposited",
            "bg-orange-500": row.getValue("DepositeStatus") === "Pending",
            "bg-green-500": row.getValue("DepositeStatus") === "Deposited",
          })}
        >
          {row.getValue("DepositeStatus")}
        </div>
      );
    },
  },
  {
    header: "Bank Name",
    accessorKey: "BankName",
  },
  {
    header: "Check Number",
    accessorKey: "CheckNumber",
  },
  {
    header: "Actions",
    cell: () => {
      return (
        <div className="flex">
          <DeleteDialoge desc="This action cannot be undone. This will permanently delete this check and remove its data from our servers." />
          <EditCheck />
        </div>
      );
    },
  },
];
