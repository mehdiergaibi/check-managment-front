import { Button } from "@/components/ui/button";
import DeleteDialoge from "@/compos/DeleteDialoge";
import { Client } from "@/types/Client";
import { ColumnDef } from "@tanstack/react-table";
import { MdModeEditOutline } from "react-icons/md";
import { RiExpandUpDownFill } from "react-icons/ri";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export const ClientsColums: ColumnDef<Client>[] = [
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <RiExpandUpDownFill className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "name",
  },
  {
    header: "Address",
    accessorKey: "address",
  },
  {
    header: "Phone",
    accessorKey: "phoneNumber",
  },
  {
    header: "Note",
    accessorKey: "note",
  },
  {
    header: "Actions",
    cell: () => {
      return (
        <div className="flex">
          <DeleteDialoge desc="This action cannot be undone. This will permanently delete this client and remove its data from our servers." />
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <MdModeEditOutline
                  size={25}
                  className="text-[#00df9a] ml-4 cursor-pointer"
                />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Client</DialogTitle>
                  <DialogDescription>
                    Make changes to your Client here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="address" className="text-right">
                      Address
                    </Label>
                    <Input id="address" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="phone" className="text-right">
                      Phone
                    </Label>
                    <Input id="phone" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="note" className="text-right">
                      Note
                    </Label>
                    <Input id="note" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      );
    },
  },
];
