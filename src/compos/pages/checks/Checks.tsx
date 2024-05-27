import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { Toaster, toast } from "sonner";

import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { dowloadExcel } from "@/lib/excelCheck";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlCalender } from "react-icons/sl";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaCheck } from "react-icons/fa";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { getCustomizeClients as allClients } from "@/services/api";
import { CustomizeClient } from "@/types/CustomizeClient";
import { addCheck } from "@/services/api";
import { Check } from "@/types/Check";
import { getBanks as Banks } from "@/services/api";
import { Bank } from "@/types/Bank";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const depositeStatus = [
  { value: "Pending", label: "Pending" },
  { value: "Deposited", label: "Deposited" },
  { value: "Not Deposited", label: "Not Deposited" },
];

function Checks<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [checkData, setCheckData] = useState(data);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFiters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [date, setDate] = useState<Date>();
  const [openStatus, setOpenStatus] = useState(false);
  const [valueStatus, setValueStatus] = useState("");
  const [openBank, setOpenBank] = useState(false);
  const [valueBank, setValueBank] = useState("");
  const [openClient, setOpenClient] = useState(false);
  const [valueClient, setValueClient] = useState("");

  const [banks, setBanks] = useState<Bank[]>([]);

  const [inputAmount, setInputAmount] = useState("");
  //const [inputDate, setInputDate] = useState("");
  const [inputNumber, setInputNumber] = useState("");

  const [clients, setClients] = useState<CustomizeClient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [openAddToastSucc, setOpenAddtoastSucc] = useState(false);
  const [openAddToastErr, setOpenAddtoastErr] = useState(false);

  /// handle AddCheck
  const HandelAddCheck = async () => {
    const checkToAdd: Check = {
      ClientName: valueClient,
      CheckAmount: inputAmount,
      CheckNumber: inputNumber,
      DepositDate: date?.toString(),
      DepositStatus: valueStatus,
      BankName: valueBank,
    };

    try {
      await addCheck(checkToAdd);
      setCheckData((prevData) => [...prevData, checkToAdd as TData]);
      setOpenAddtoastSucc(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error");
      }
      console.error("Error adding check:", error);
      setOpenAddtoastErr(true);
    }
  };

  // Show success toast
  useEffect(() => {
    if (openAddToastSucc) {
      toast.success("Check added successfully");
      setOpenAddtoastSucc(false);
    }
  }, [openAddToastSucc]);

  // Show error toast
  useEffect(() => {
    if (openAddToastErr) {
      toast.error(error);
      setOpenAddtoastErr(false);
    }
  }, [openAddToastErr]);

  // get banks
  useEffect(() => {
    const getBanks = async () => {
      try {
        const AllBanks = await Banks();
        setBanks(AllBanks);
      } catch (err) {
        console.log(err);
      }
    };
    getBanks();
  }, []);

  // get clients
  useEffect(() => {
    const getChecks = async () => {
      try {
        const getAllClients: CustomizeClient[] = await allClients();
        console.log(getAllClients);
        setClients(getAllClients);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error");
        }
      } finally {
        setLoading(false);
      }
    };
    getChecks();
  }, []);

  const table = useReactTable({
    data: checkData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFiters,
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div>
      <Toaster richColors />
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center">
          <Input
            className="max-w-sm"
            placeholder="Filter..."
            value={
              (table.getColumn("Client")?.getFilterValue() as string) || ""
            }
            onChange={(e) => {
              table.getColumn("Client")?.setFilterValue(e.target.value);
            }}
          />
          <Button
            onClick={() => dowloadExcel(checkData, "Checks", "Check")}
            className="ml-4 hidden md:block"
          >
            Export To Excel
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="ml-1 md:ml-4">
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Select Columns</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value: boolean) => {
                        column.toggleVisibility(!!value);
                      }}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="ml-1 md:ml-auto">
          <Sheet key="top">
            <SheetTrigger>
              <Button>Add Check</Button>
            </SheetTrigger>
            <SheetContent className="container" side="top">
              <SheetHeader>
                <SheetTitle>Add Check</SheetTitle>
                <SheetDescription>
                  Add Check here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="clients" className="md:text-right">
                    Clients
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
                          ? clients.find(
                              (client) => `${client.name}` === valueClient
                            )?.name
                          : ""}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search Client"
                          className="h-9"
                        />
                        <CommandEmpty>No Client found.</CommandEmpty>
                        <CommandGroup>
                          {clients.map((client) => (
                            <CommandList key={client.name}>
                              <CommandItem
                                key={client.name}
                                value={client.name}
                                onSelect={(currentValue) => {
                                  setValueClient(
                                    currentValue === valueClient
                                      ? ""
                                      : currentValue
                                  );
                                  setOpenClient(false);
                                }}
                              >
                                {client.name}
                                <FaCheck
                                  className={`ml-auto h-4 w-4 ${
                                    valueBank === `${client.name}`
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
                  <Label htmlFor="check_amount" className="md:text-right">
                    Check Amount
                  </Label>
                  <Input
                    id="check_amount"
                    type="number"
                    className="col-span-3"
                    onChange={(e) => setInputAmount(e.target.value)}
                  />
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
                        {date ? (
                          format(date, "yyyy/MM/dd")
                        ) : (
                          <span>Pick a date</span>
                        )}
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
                            <CommandList key={status.value}>
                              <CommandItem
                                key={status.value}
                                value={status.value}
                                onSelect={(currentValue) => {
                                  setValueStatus(
                                    currentValue === valueStatus
                                      ? ""
                                      : currentValue
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
                          ? banks.find((bank) => bank.name === valueBank)?.name
                          : ""}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search Bank"
                          className="h-9"
                        />
                        <CommandEmpty>No Bank found.</CommandEmpty>
                        <CommandGroup>
                          {banks.map((bank) => (
                            <CommandList key={bank.name}>
                              <CommandItem
                                key={bank.name}
                                value={bank.name}
                                onSelect={(currentValue) => {
                                  setValueBank(
                                    currentValue === valueBank
                                      ? ""
                                      : currentValue
                                  );
                                  setOpenBank(false);
                                }}
                              >
                                {bank.name}
                                <FaCheck
                                  className={`ml-auto h-4 w-4 ${
                                    valueBank === bank.name
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
                  <Input
                    id="check_number"
                    type="number"
                    className="col-span-3"
                    onChange={(e) => setInputNumber(e.target.value)}
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" onClick={HandelAddCheck}>
                    Add
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>Nothing to show</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-start space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Checks;
