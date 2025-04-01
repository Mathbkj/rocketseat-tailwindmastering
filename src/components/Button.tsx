import type { ComponentProps, FC } from "react";
import { tv, type VariantProps } from "tailwind-variants";


const button = tv({
  base: [
    "rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm",
    "active:opacity-88 transition-all",
  ],
  variants: {
    variant: {
      primary: "bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-800 dark:hover:bg-violet-700 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 dark:border-zinc-500 ",
      ghost:"rounded-md px-2 hover:bg-zinc-100/70 dark:hover:bg-white/5 text-zinc-500 dark:text-zinc-300 shadow-none",
      outline:"border border-zinc-300 text-zinc-700  hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
      
    },
  },
  defaultVariants:{
    variant:"primary"
  }
});
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button> & {};

export const Button: FC<ButtonProps> = ({ variant,className, ...props }) => {
  return (
    <button {...props} className={button({ variant,className })}>
      {props.children}
    </button>
  );
};
