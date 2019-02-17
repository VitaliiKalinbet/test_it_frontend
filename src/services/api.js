import axios from "axios";

// axios.defaults.baseURL = "http://localhost:41410/api/v1";
axios.defaults.baseURL = "http://194.44.175.186:41410/api/v1";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";

export const getFirstQuestion = async () => {
  const response = axios.get("/question");
  return response;
};

export const setResuts = async data => {

  const response = axios.put("/answer", data);

  return response;
};

export const getUserResults = async id => {
  const response = axios.get(`/result/${id}`)

  return response;
}
 
export const getNextQuestion = async id => {
  const response = axios.get(`/question/${id}`);
  return response;
};
