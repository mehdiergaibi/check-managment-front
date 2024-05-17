import { Button } from "@/components/ui/button";
import { Check } from "@/types/Check";
import { ColumnDef } from "@tanstack/react-table";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { RiExpandUpDownFill } from "react-icons/ri";

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
          <AiFillDelete size={25} className="text-red-500 cursor-pointer" />
          <MdModeEditOutline
            size={25}
            className="text-[#00df9a] ml-4 cursor-pointer"
          />
        </div>
      );
    },
  },
];
