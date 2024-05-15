import { useEffect, useState } from "react";
import { getChecks } from "@/services/api";
import Checks from "./Checks";
import { CheckColums } from "./Columns";
import { Check } from "@/types/Check";

/* const dt = [
  {
    CheckNumber: "string",
    CheckAmount: "string",
    DepositDate: "string",
    BankName: "string",
    ClientName: "string",
    DepositStatus: "string",
  },
]; */

const Page = () => {
  const [checks, setChecks] = useState<Check[] | any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getChecks();
        console.log(data);
        setChecks(data);
      } catch (error) {
        console.error("Error fetching checks:", error);
      }
    };
    fetchData();
    //console.log(checks);
  }, []);
  return <Checks columns={CheckColums} data={checks} />;
};

export default Page;
