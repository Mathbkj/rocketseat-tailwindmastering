import { formatText } from "@/utils/formatText";
import {
  createContext,
  useState,
  memo,
  type PropsWithChildren,
  useEffect,
  type Dispatch,
  type SetStateAction,
} from "react";

interface SelectedProps {
  bold: boolean;
  italic: boolean;
  unordered: boolean;
  ordered: boolean;
}
interface BioContextProps extends SelectedProps {
  initialText: string;
  setInitialText: Dispatch<SetStateAction<string>>;
  handleSelected: (btn: keyof SelectedProps) => void;
}
export const BioContext = createContext<BioContextProps>({
  bold: false,
  italic: false,
  unordered: false,
  ordered: false,
  initialText:
    "I'm a web developer based in São Paulo, Brazil. I specialize in UI design integration with data, creating seamless and dynamic user experiences. My tech stack revolves around React and Node.js, allowing me to build full-stack applications that are both efficient and visually compelling.",
  setInitialText: () => {},
  handleSelected: () => {
    console.log("default value");
  },
});

interface BioProviderProps extends PropsWithChildren {}

function BioContextProvider({ children }: BioProviderProps) {
  const [isSelected, setSelected] = useState<SelectedProps>({
    bold: false,
    italic: false,
    unordered: false,
    ordered: false,
  });
  const [initialText, setInitialText] = useState<string>(
    "I'm a web developer based in São Paulo, Brazil. I specialize in UI design integration with data, creating seamless and dynamic user experiences. My tech stack revolves around React and Node.js, allowing me to build full-stack applications that are both efficient and visually compelling."
  );
  const { bold, italic, unordered, ordered } = isSelected;

  useEffect(() => {
    console.log(isSelected);
  }, [isSelected]);

  useEffect(() => {
    unordered &&
      setInitialText((prev) => formatText(prev, "unordered") ?? prev);
  }, [unordered]);

  useEffect(() => {
    ordered && setInitialText((prev) => formatText(prev, "order") ?? prev);
  }, [ordered]);

  const handleSelected = (btn: keyof SelectedProps) => {
    switch (btn) {
      case "bold":
        setSelected((prev) => ({ ...prev, bold: !bold }));
        break;
      case "italic":
        setSelected((prev) => ({ ...prev, italic: !italic }));
        break;
      case "unordered":
        setSelected((prev) => ({
          ...prev,
          ordered: false,
          unordered: !unordered,
        }));

        break;
      case "ordered":
        setSelected((prev) => ({
          ...prev,
          unordered: false,
          ordered: !ordered,
        }));
        break;
      default:
        "";
    }
  };
  return (
    <BioContext.Provider
      value={{
        bold,
        italic,
        unordered,
        ordered,
        handleSelected,
        initialText,
        setInitialText,
      }}
    >
      {children}
    </BioContext.Provider>
  );
}
export default memo(BioContextProvider);
