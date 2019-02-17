import axios from "axios";

axios.defaults.baseURL = "http://194.44.175.186:41410/api/v1";
axios.defaults.headers.put["Content-Type"] = "application/json";

export const getFirstQuestion = async () => {
  const response = axios.get("/question");
  return response;
};

export const setResuts = async data => {
  console.log(data);

  const response = axios.put("/answer", data);

  return response;
};

export const getNextQuestion = async id => {
  const response = axios.get(`/question/${id}`);
  return response;
};
