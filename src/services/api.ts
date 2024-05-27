import { Check } from "@/types/Check";
import { Client } from "@/types/Client";
import axios, { AxiosError } from "axios";

const URL = import.meta.env.VITE_URI_API;
//console.log(URL);
// get checks
export const getChecks = async (): Promise<any[]> => {
  try {
    const response = await axios.get(`${URL}check`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

// get clients
export const getClients = async () => {
  try {
    const response = await axios.get(`${URL}clients`);
    // console.log(response.data);
    const clients = response.data;
    const Custom = clients.map((client: Client) => {
      return { name: `${client.firstName} ${client.lastName}`, ...client };
    });
    console.log("custome", Custom);
    return Custom;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
//get customize clients
export const getCustomizeClients = async () => {
  try {
    const response = await getClients();
    const customize = response.map((client: any) => {
      return { name: `${client.firstName} ${client.lastName}` };
    });
    return customize;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
getClients();
// get banks
export const getBanks = async () => {
  try {
    const response = await axios.get(`${URL}banks`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
// update checks
export const updateChecks = async (
  checkId: string,
  checkData: Partial<Check>
) => {
  try {
    const response = await axios.patch(
      `${URL}check/update-check/${checkId}`,
      checkData
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    } else {
      throw new Error("unespected Error");
    }
  }
};
// update clients
export const updateCients = async (
  clientId: string,
  clientData: Partial<Client>
) => {
  try {
    const response = await axios.patch(
      `${URL}clients/update-client/${clientId}`,
      clientData
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    } else {
      throw new Error("unespected Error");
    }
  }
};
// update banks
// delete checks
export const deleteCheck = async (checkId: string) => {
  try {
    const response = await axios.delete(`${URL}check/delete-check/${checkId}`);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    } else {
      throw new Error("uns[ected Error");
    }
  }
};
// delete clients
export const deleteClient = async (clientId: string) => {
  try {
    const response = await axios.delete(
      `${URL}clients/delete-client/${clientId}`
    );
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    } else {
      throw new Error("unespected Error");
    }
  }
};
// delete banks
// add check
export const addCheck = async (dataCheck: Check) => {
  try {
    const response = await axios.post(`${URL}check/add-check`, dataCheck);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    } else {
      throw new Error("unespected Error");
    }
  }
};
// add client
export const addClient = async (dataClient: Check) => {
  try {
    const response = await axios.post(`${URL}clients/add-client`, dataClient);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    } else {
      throw new Error("unespected Error");
    }
  }
};
// add bank
