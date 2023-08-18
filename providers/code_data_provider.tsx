import { CodeDataContext } from "./code_data_context";
import { CreatedCodeData } from "@/types/code";

type Props = {
  data: CreatedCodeData;
  children: React.ReactNode;
};

const CodeDataProvider = ({ data, children }: Props) => {
  return (
    <CodeDataContext.Provider value={data}>{children}</CodeDataContext.Provider>
  );
};

export default CodeDataProvider;
