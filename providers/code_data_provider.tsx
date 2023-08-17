import { CodeResponse } from "@/api";
import { CodeDataContext } from "./code_data_context";

type Props = {
  data: CodeResponse;
  children: React.ReactNode;
};

const CodeDataProvider = ({ data, children }: Props) => {
  return (
    <CodeDataContext.Provider value={data}>{children}</CodeDataContext.Provider>
  );
};

export default CodeDataProvider;
