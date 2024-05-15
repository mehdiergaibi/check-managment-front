import axios from "axios";

const URL = process.env.URI_API;

// get checks
export const getChecks = async () => {
  axios
    .get(`${URL}/check`)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      throw error.message;
    });
};

// get clients
export const getClients = async () => {
  try {
    const response = await axios.get(`${URL}/clients`);
    return response.data;
  } catch (error) {
    console.error("Error getting clients:", error);
    throw error;
  }
};
// get banks
export const getBanks = async () => {
  try {
    const response = await axios.get(`${URL}/banks`);
    return response.data;
  } catch (error) {
    console.error("Error getting banks:", error);
    throw error;
  }
};
