import { CodeResponse } from "@/api";
import { createContext } from "react";

export const CodeDataContext = createContext<CodeResponse>({
  id: -1,
  themeId: -1,
  code: "",
  timeStamp: "",
});
