import { BioContext } from "@/contexts/BioContext";
import { useContext, type FC } from "react";

export const TextArea: FC = () => {
  const { initialText, setInitialText, bold, italic, unordered, ordered } =
    useContext(BioContext);

  const base =
    "min-h-[120px] mx-1 max-w-[95%] focus:border-violet-300  focus:ring-4 focus:ring-violet-100 outline-none resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-violet-500 dark:focus:ring-violet-500/20 dark:text-zinc-100 dark:placeholder-zinc-800";
  return (
    <textarea
      id="bio"
      value={initialText}
      onChange={(ev) => {
        setInitialText(ev.target.value);
      }}
      style={{
        fontWeight: bold ? "bold" : "normal",
        fontStyle: italic ? "italic" : "normal",
      }}
      className={base}
    />
  );
};
