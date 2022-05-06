import axios from "axios";

const url = axios.create({
  baseURL: "https://makemytrip-666bbb-default-rtdb.firebaseio.com",
});

export const getApiSuggestions = () => {
  let result = url
    .get(`/locationData.json`)
    .then((response) => {
      return response.data[2];
    })
    .catch((error) => {
      return error;
    });

  return result;
};
