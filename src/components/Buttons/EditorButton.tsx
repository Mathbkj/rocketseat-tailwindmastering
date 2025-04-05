import { BioContext } from "@/contexts/BioContext";
import {
  useContext,
  type FC,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  type LucideProps,
} from "lucide-react";

interface EditorButtonProps {
  title: "bold" | "italic" | "unordered" | "ordered";
  className?: string;
}
interface IconElementProps extends LucideProps {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}
const Icon: FC<IconElementProps> = ({ icon: Icon, ...props }) => {
  return <Icon {...props} size={20} className={` ${props.className ?? ""}`} />;
};
export const EditorButton: FC<EditorButtonProps> = ({ title }) => {
  const { handleActive, ...rest } = useContext(BioContext);
  const focusBase = "dark:text-white text-black";
  return (
    <button
      type="button"
      onClick={() => handleActive(title)}
      className="p-2 rounded-md group transition-all hover:bg-zinc-100/70 dark:hover:bg-white/5 text-zinc-500 dark:text-zinc-00 shadow-none"
    >
      {title === "bold" && (
        <Icon icon={Bold} className={rest.bold ? focusBase : ""} />
      )}
      {title === "italic" && (
        <Icon icon={Italic} className={rest.italic ? focusBase : ""} />
      )}
      {title === "unordered" && (
        <Icon icon={List} className={rest.unordered ? focusBase : ""} />
      )}
      {title === "ordered" && (
        <Icon icon={ListOrdered} className={rest.ordered ? focusBase : ""} />
      )}
    </button>
  );
};
