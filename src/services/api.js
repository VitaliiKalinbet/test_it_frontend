import axios from "axios";

axios.defaults.baseURL = "http://194.44.175.186:41410/api/v1";

export const getFirstQuestion = async () => {
  const response = axios.get("/question");
  return response;
};

export const setResuts = async ({ data }) => {
  console.log(data);
  const headers = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = axios.put("/answer", {
    headers,
    body: data
  });

  return response;
};

export const getNextQuestion = async id => {
  const response = axios.get(`/question/${id}`);
  return response;
};
