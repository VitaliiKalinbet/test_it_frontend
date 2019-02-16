import { createContext } from "react";

export const ResultContext = createContext({
  results: [],
  updateResults: () => null
});
