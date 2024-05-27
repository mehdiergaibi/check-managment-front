import Checks from "./Checks";
import { CheckColums } from "./Columns";
import { getChecks as allChecks } from "@/services/api";
import { Check } from "@/types/Check";
import { useEffect, useState } from "react";


const Page = () => {
  const [checks, setChecks] = useState<Check[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // get checks
  useEffect(() => {
    const getChecks = async () => {
      try {
        const getAllChecks: Check[] = await allChecks();
        setChecks(getAllChecks);
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="px-1 md:container md:py-10 mx-auto">
      <Checks columns={CheckColums} data={checks} />
    </div>
  );
};

export default Page;
