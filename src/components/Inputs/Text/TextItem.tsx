import { Button } from "@/components/Button";
import { PassContext, PassContextProvider } from "@/contexts/PassContext";
import { LockIcon, LockOpenIcon } from "lucide-react";
import { useContext, type ComponentProps } from "react";

export interface Props {
  className: string;
}
interface PrefixProps extends ComponentProps<"div"> {}

export function Prefix(props: PrefixProps) {
  return <div {...props} />;
}
interface ControlProps extends ComponentProps<"input"> {}

export function Control(props: ControlProps) {
  const { isToggled, setToggled } = useContext(PassContext);
  return (
    <>
      {props.type !== "password" ? (
        <input
          {...props}
          disabled={props.disabled}
          placeholder={props.placeholder || "Search"}
          className="border-0 bg-transparent text-left pt-0.5 text-zinc-900 w-full placeholder-zinc-800 disabled:placeholder-zinc-400 dark:disabled:placeholder-zinc-700 outline-none disabled:cursor-not-allowed dark:placeholder-zinc-400 dark:text-zinc-100"
        />
      ) : (
      
          <div className="flex relative w-full items-center">
            <input
              {...props}
              type={!isToggled ? "password" : "text"}
              disabled={props.disabled}
              placeholder={props.placeholder || "Search"}
              className="border-0 bg-transparent text-left pt-0.5 text-zinc-900 w-full placeholder-zinc-800 disabled:placeholder-zinc-400 dark:disabled:placeholder-zinc-700 outline-none disabled:cursor-not-allowed dark:placeholder-zinc-400 dark:text-zinc-100"
            />
            <Button type="button" variant="ghost" onClick={()=>setToggled(!isToggled)} className="absolute right-0">
              {!isToggled ? <LockIcon size={20} /> : <LockOpenIcon size={20} />}
            </Button>
          </div>
      )}
    </>
  );
}
export interface RootProps extends ComponentProps<"div"> {}

export function Root({ className, ...props }: RootProps) {
  const baseClassName =
    "flex relative w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10";
  return <div className={`${baseClassName} ${className || ""}`} {...props} />;
}
