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

interface ActiveProps {
  bold: boolean;
  italic: boolean;
  unordered: boolean;
  ordered: boolean;
}
interface BioContextProps extends ActiveProps {
  initialText: string;
  setInitialText: Dispatch<SetStateAction<string>>;
  handleActive: (btn: "bold" | "italic" | "unordered" | "ordered") => void;
}
export const BioContext = createContext<BioContextProps>({
  bold: false,
  italic: false,
  unordered: false,
  ordered: false,
  initialText:
    "I'm a web developer based in São Paulo, Brazil. I specialize in UI design integration with data, creating seamless and dynamic user experiences. My tech stack revolves around React and Node.js, allowing me to build full-stack applications that are both efficient and visually compelling.",
  setInitialText: () => {},
  handleActive: () => {
    console.log("default value");
  },
});

interface BioProviderProps extends PropsWithChildren {}

function BioContextProvider({ children }: BioProviderProps) {
  const [active, setActive] = useState<ActiveProps>({
    bold: false,
    italic: false,
    unordered: false,
    ordered: false,
  });
  const [initialText, setInitialText] = useState<string>(
    "I'm a web developer based in São Paulo, Brazil. I specialize in UI design integration with data, creating seamless and dynamic user experiences. My tech stack revolves around React and Node.js, allowing me to build full-stack applications that are both efficient and visually compelling."
  );
  const { bold, italic, unordered, ordered } = active;

  useEffect(() => {
    console.log(active);
  }, [active]);

  useEffect(() => {
    unordered &&
      setInitialText((prev) => formatText(prev, "unordered") ?? prev);
  }, [unordered]);

  useEffect(()=>{
    ordered && setInitialText((prev)=>formatText(prev,"order")??prev);
  },[ordered])

  const handleActive = (btn: "bold" | "italic" | "unordered" | "ordered") => {
    switch (btn) {
      case "bold":
        setActive((prev) => ({ ...prev, bold: !bold }));
        break;
      case "italic":
        setActive((prev) => ({ ...prev, italic: !italic }));
        break;
      case "unordered":
        setActive((prev) => ({
          ...prev,
          ordered: false,
          unordered: !unordered,
        }));

        break;
      case "ordered":
        setActive((prev) => ({ ...prev, unordered: false, ordered: !ordered }));
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
        handleActive,
        initialText,
        setInitialText,
      }}
    >
      {children}
    </BioContext.Provider>
  );
}
export default memo(BioContextProvider);
