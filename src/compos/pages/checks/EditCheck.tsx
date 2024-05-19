import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { FaCheck } from "react-icons/fa";

import { SlCalender } from "react-icons/sl";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdModeEditOutline } from "react-icons/md";
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
const depositeStatus = [
  { value: "pending", label: "Pending" },
  { value: "deposited", label: "Deposited" },
  { value: "not_deposited", label: "Not Deposited" },
];
const banks = [
  { value: "cih", label: "Cih" },
  { value: "tijari", label: "Ettijari" },
  { value: "cfg", label: "Cfg" },
];
const clients = [
  { value: "client1", label: "client1" },
  { value: "client2", label: "client2" },
  { value: "client3", label: "client3" },
];

function EditCheck() {
  const [date, setDate] = useState<Date>();

  const [openStatus, setOpenStatus] = useState(false);
  const [valueStatus, setValueStatus] = useState("");
  const [openBank, setOpenBank] = useState(false);
  const [valueBank, setValueBank] = useState("");
  const [openClient, setOpenClient] = useState(false);
  const [valueClient, setValueClient] = useState("");

  return (
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
            <DialogTitle>Edit Check</DialogTitle>
            <DialogDescription>
              Make changes to your Check here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Client
              </Label>
              <Popover open={openClient} onOpenChange={setOpenClient}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openClient}
                    className="col-span-3 justify-between"
                  >
                    {valueClient
                      ? clients.find((client) => client.value === valueClient)
                          ?.label
                      : ""}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search Client" className="h-9" />
                    <CommandEmpty>No Client found.</CommandEmpty>
                    <CommandGroup>
                      {clients.map((client) => (
                        <CommandList>
                          <CommandItem
                            key={client.value}
                            value={client.value}
                            onSelect={(currentValue) => {
                              setValueClient(
                                currentValue === valueClient ? "" : currentValue
                              );
                              setOpenClient(false);
                            }}
                          >
                            {client.label}
                            <FaCheck
                              className={`ml-auto h-4 w-4 ${
                                valueBank === client.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              }`}
                            />
                          </CommandItem>
                        </CommandList>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="check_amount" className="text-right">
              Check Amount
            </Label>
            <Input id="check_amount" type="number" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="deposite_date" className="md:text-right">
              Deposite Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "col-span-3 justify-start text-left font-normal",
                    !date && "text-muted-foreground col-span-3 "
                  )}
                >
                  <SlCalender className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="deposite_status" className="md:text-right">
              Deposite Status
            </Label>
            <Popover open={openStatus} onOpenChange={setOpenStatus}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openStatus}
                  className="col-span-3 justify-between"
                >
                  {valueStatus
                    ? depositeStatus.find(
                        (status) => status.value === valueStatus
                      )?.label
                    : ""}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput
                    placeholder="Search Deposit Status"
                    className="h-9"
                  />
                  <CommandEmpty>No Deposit Status found.</CommandEmpty>
                  <CommandGroup>
                    {depositeStatus.map((status) => (
                      <CommandList>
                        <CommandItem
                          key={status.value}
                          value={status.value}
                          onSelect={(currentValue) => {
                            setValueStatus(
                              currentValue === valueStatus ? "" : currentValue
                            );
                            setOpenStatus(false);
                          }}
                        >
                          {status.label}
                          <FaCheck
                            className={`ml-auto h-4 w-4 ${
                              valueStatus === status.value
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                          />
                        </CommandItem>
                      </CommandList>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="banks" className="md:text-right">
              Banks
            </Label>
            <Popover open={openBank} onOpenChange={setOpenBank}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openBank}
                  className="col-span-3 justify-between"
                >
                  {valueBank
                    ? banks.find((bank) => bank.value === valueBank)?.label
                    : ""}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search Bank" className="h-9" />
                  <CommandEmpty>No Bank found.</CommandEmpty>
                  <CommandGroup>
                    {banks.map((bank) => (
                      <CommandList>
                        <CommandItem
                          key={bank.value}
                          value={bank.value}
                          onSelect={(currentValue) => {
                            setValueBank(
                              currentValue === valueBank ? "" : currentValue
                            );
                            setOpenStatus(false);
                          }}
                        >
                          {bank.label}
                          <FaCheck
                            className={`ml-auto h-4 w-4 ${
                              valueBank === bank.value
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                          />
                        </CommandItem>
                      </CommandList>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="check_number" className="md:text-right">
              Check Number
            </Label>
            <Input id="check_number" type="number" className="col-span-3" />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditCheck;
