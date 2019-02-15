import axios from "axios";

axios.defaults.baseURL = "http://194.44.175.186:41410/api/v1";

export const getFirstQuestion = async () => {
  const response = axios.get("/question");
  return response;
};

export const getNextQuestion = async id => {
  const response = axios.get(`/question/${id}`);
  return response;
};
