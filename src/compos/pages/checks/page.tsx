/* import { useEffect, useState } from "react";
import { getChecks } from "@/services/api"; */
import Checks from "./Checks";
import { CheckColums } from "./Columns";
import { Check } from "@/types/Check";

export const dt: Check[] = [
  {
    CheckNumber: "6383112302276529",
    CheckAmount: "$4.30",
    DepositeDate: "4/8/2024",
    BankName: "400SE",
    Client: "Lyséa",
    DepositeStatus: "Deposited",
  },
  {
    CheckNumber: "3561328491220240",
    CheckAmount: "$7.87",
    DepositeDate: "3/4/2024",
    BankName: "XC90",
    Client: "Anaé",
    DepositeStatus: "Deposited",
  },
  {
    CheckNumber: "3535301374450468",
    CheckAmount: "$1.45",
    DepositeDate: "1/1/2024",
    BankName: "Ram Van 1500",
    Client: "Bérengère",
    DepositeStatus: "Deposited",
  },
  {
    CheckNumber: "5007666297416224",
    CheckAmount: "$5.44",
    DepositeDate: "11/7/2023",
    BankName: "Tundra",
    Client: "Eugénie",
    DepositeStatus: "Not Deposited",
  },
  {
    CheckNumber: "3563378464635336",
    CheckAmount: "$8.91",
    DepositeDate: "7/2/2023",
    BankName: "Envoy",
    Client: "Dù",
    DepositeStatus: "Pending",
  },
  {
    CheckNumber: "3542098250608364",
    CheckAmount: "$8.85",
    DepositeDate: "7/24/2023",
    BankName: "J",
    Client: "Rébecca",
    DepositeStatus: "Pending",
  },
  {
    CheckNumber: "6762359413176657287",
    CheckAmount: "$4.01",
    DepositeDate: "10/9/2023",
    BankName: "E-Class",
    Client: "Almérinda",
    DepositeStatus: "Not Deposited",
  },
  {
    CheckNumber: "5100144432212649",
    CheckAmount: "$2.01",
    DepositeDate: "6/11/2023",
    BankName: "XC70",
    Client: "Rachèle",
    DepositeStatus: "Not Deposited",
  },
  {
    CheckNumber: "NEW_CHECK_NUMBER",
    CheckAmount: "$NEW_CHECK_AMOUNT",
    DepositeDate: "NEW_DEPOSIT_DATE",
    BankName: "NEW_BANK_NAME",
    Client: "NEW_CLIENT_NAME",
    DepositeStatus: "Deposited",
  },
  {
    CheckNumber: "6383112302276529",
    CheckAmount: "$4.30",
    DepositeDate: "4/8/2024",
    BankName: "400SE",
    Client: "Lyséa",
    DepositeStatus: "Deposited",
  },
  {
    CheckNumber: "3561328491220240",
    CheckAmount: "$7.87",
    DepositeDate: "3/4/2024",
    BankName: "XC90",
    Client: "Anaé",
    DepositeStatus: "Deposited",
  },
  {
    CheckNumber: "3535301374450468",
    CheckAmount: "$1.45",
    DepositeDate: "1/1/2024",
    BankName: "Ram Van 1500",
    Client: "Bérengère",
    DepositeStatus: "Deposited",
  },
  {
    CheckNumber: "5007666297416224",
    CheckAmount: "$5.44",
    DepositeDate: "11/7/2023",
    BankName: "Tundra",
    Client: "Eugénie",
    DepositeStatus: "Not Deposited",
  },
  {
    CheckNumber: "3563378464635336",
    CheckAmount: "$8.91",
    DepositeDate: "7/2/2023",
    BankName: "Envoy",
    Client: "Dù",
    DepositeStatus: "Pending",
  },
  {
    CheckNumber: "3542098250608364",
    CheckAmount: "$8.85",
    DepositeDate: "7/24/2023",
    BankName: "J",
    Client: "Rébecca",
    DepositeStatus: "Pending",
  },
  {
    CheckNumber: "6762359413176657287",
    CheckAmount: "$4.01",
    DepositeDate: "10/9/2023",
    BankName: "E-Class",
    Client: "Almérinda",
    DepositeStatus: "Not Deposited",
  },
  {
    CheckNumber: "5100144432212649",
    CheckAmount: "$2.01",
    DepositeDate: "6/11/2023",
    BankName: "XC70",
    Client: "Rachèle",
    DepositeStatus: "Not Deposited",
  },
  {
    CheckNumber: "NEW_CHECK_NUMBER",
    CheckAmount: "$NEW_CHECK_AMOUNT",
    DepositeDate: "NEW_DEPOSIT_DATE",
    BankName: "NEW_BANK_NAME",
    Client: "NEW_CLIENT_NAME",
    DepositeStatus: "Deposited",
  },
  {
    CheckNumber: "6383112302276529",
    CheckAmount: "$4.30",
    DepositeDate: "4/8/2024",
    BankName: "400SE",
    Client: "Lyséa",
    DepositeStatus: "Deposited",
  },
  {
    CheckNumber: "3561328491220240",
    CheckAmount: "$7.87",
    DepositeDate: "3/4/2024",
    BankName: "XC90",
    Client: "Anaé",
    DepositeStatus: "Deposited",
  },
  {
    CheckNumber: "3535301374450468",
    CheckAmount: "$1.45",
    DepositeDate: "1/1/2024",
    BankName: "Ram Van 1500",
    Client: "Bérengère",
    DepositeStatus: "Deposited",
  },
  {
    CheckNumber: "5007666297416224",
    CheckAmount: "$5.44",
    DepositeDate: "11/7/2023",
    BankName: "Tundra",
    Client: "Eugénie",
    DepositeStatus: "Not Deposited",
  },
  {
    CheckNumber: "3563378464635336",
    CheckAmount: "$8.91",
    DepositeDate: "7/2/2023",
    BankName: "Envoy",
    Client: "Dù",
    DepositeStatus: "Pending",
  },
  {
    CheckNumber: "3542098250608364",
    CheckAmount: "$8.85",
    DepositeDate: "7/24/2023",
    BankName: "J",
    Client: "Rébecca",
    DepositeStatus: "Pending",
  },
  {
    CheckNumber: "6762359413176657287",
    CheckAmount: "$4.01",
    DepositeDate: "10/9/2023",
    BankName: "E-Class",
    Client: "Almérinda",
    DepositeStatus: "Not Deposited",
  },
  {
    CheckNumber: "5100144432212649",
    CheckAmount: "$2.01",
    DepositeDate: "6/11/2023",
    BankName: "XC70",
    Client: "Rachèle",
    DepositeStatus: "Not Deposited",
  },
  {
    CheckNumber: "NEW_CHECK_NUMBER",
    CheckAmount: "$NEW_CHECK_AMOUNT",
    DepositeDate: "NEW_DEPOSIT_DATE",
    BankName: "NEW_BANK_NAME",
    Client: "NEW_CLIENT_NAME",
    DepositeStatus: "Deposited",
  },
  {
    CheckNumber: "6383112302276529",
    CheckAmount: "$4.30",
    DepositeDate: "4/8/2024",
    BankName: "400SE",
    Client: "Lyséa",
    DepositeStatus: "Deposited",
  },
  {
    CheckNumber: "3561328491220240",
    CheckAmount: "$7.87",
    DepositeDate: "3/4/2024",
    BankName: "XC90",
    Client: "Anaé",
    DepositeStatus: "Deposited",
  },
  {
    CheckNumber: "3535301374450468",
    CheckAmount: "$1.45",
    DepositeDate: "1/1/2024",
    BankName: "Ram Van 1500",
    Client: "Bérengère",
    DepositeStatus: "Deposited",
  },
  {
    CheckNumber: "5007666297416224",
    CheckAmount: "$5.44",
    DepositeDate: "11/7/2023",
    BankName: "Tundra",
    Client: "Eugénie",
    DepositeStatus: "Not Deposited",
  },
  {
    CheckNumber: "3563378464635336",
    CheckAmount: "$8.91",
    DepositeDate: "7/2/2023",
    BankName: "Envoy",
    Client: "Dù",
    DepositeStatus: "Pending",
  },
  {
    CheckNumber: "3542098250608364",
    CheckAmount: "$8.85",
    DepositeDate: "7/24/2023",
    BankName: "J",
    Client: "Rébecca",
    DepositeStatus: "Pending",
  },
  {
    CheckNumber: "6762359413176657287",
    CheckAmount: "$4.01",
    DepositeDate: "10/9/2023",
    BankName: "E-Class",
    Client: "Almérinda",
    DepositeStatus: "Not Deposited",
  },
  {
    CheckNumber: "5100144432212649",
    CheckAmount: "$2.01",
    DepositeDate: "6/11/2023",
    BankName: "XC70",
    Client: "Rachèle",
    DepositeStatus: "Not Deposited",
  },
  {
    CheckNumber: "NEW_CHECK_NUMBER",
    CheckAmount: "$NEW_CHECK_AMOUNT",
    DepositeDate: "NEW_DEPOSIT_DATE",
    BankName: "NEW_BANK_NAME",
    Client: "NEW_CLIENT_NAME",
    DepositeStatus: "Deposited",
  },
];

const Page = () => {
  /*   const [checks, setChecks] = useState<Check[] | any>([]);
   */
  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getChecks();
        //console.log(data);
        setChecks(data);
      } catch (error) {
        console.error("Error fetching checks:", error);
      }
    };
    fetchData();
  }, []); */
  return (
    <div className="px-1 md:container md:py-10 mx-auto">
      <Checks columns={CheckColums} data={dt} />
    </div>
  );
};

export default Page;
