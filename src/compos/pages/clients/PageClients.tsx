import { ClientsColums } from "./Column";
import Clients from "./Clients";

import { Client } from "@/types/Client";
import { getClients as allClients } from "@/services/api";
import { useEffect, useState } from "react";

function PageClients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getClients = async () => {
      try {
        const getClients = await allClients();
        console.log(getClients);
        setClients(getClients);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("error inspected");
        }
      } finally {
        setLoading(false);
      }
    };
    getClients();
  }, []);
  return (
    <div className="px-1 md:container md:py-10 mx-auto">
      <Clients columns={ClientsColums} data={clients} />
    </div>
  );
}

export default PageClients;
