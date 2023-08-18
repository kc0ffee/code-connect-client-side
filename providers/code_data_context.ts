import { CreatedCodeData } from "@/types/code";
import { createContext } from "react";

export const CodeDataContext = createContext<CreatedCodeData>({
  language: "",
  code: "go",
  themeId: 0,
});
