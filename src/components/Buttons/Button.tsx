import type { ComponentProps, FC } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: [
    "rounded-lg px-3 py-2 text-sm font-semibold outline-none shadow-sm",
    "active:opacity-88 transition-all",
    "disabled:cursor-default!",
  ],
  variants: {
    variant: {
      primary:
        "bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-800 dark:hover:bg-violet-700 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 dark:border-zinc-500 ",
      ghost:
        "rounded-md hover:bg-zinc-100/70 dark:hover:bg-white/5 text-zinc-500 dark:text-zinc-300 shadow-none",
      outline:
        "border border-zinc-300 text-zinc-700  hover:bg-zinc-100/70 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
      filled:
        "flex my-px bg-zinc-700/10 text-zinc-400 h-13 w-13 dark:bg-zinc-300/10 dark:text-zinc-500 rounded-full max-lg:self-center justify-center items-center",
      success:
        "flex shadow-none! rounded-full bg-green-100/70 hover:bg-green-200/50 dark:hover:bg-green-900/40 border my-2 px-8 dark:bg-green-900/30 text-emerald-600 dark:text-emerald-400 ",
      warning: "flex shadow-none! rounded-full bg-amber-100/70 hover:bg-amber-200/50 my-2 px-5 border text-yellow-600 dark:bg-amber-900/30 dark:hover:bg-amber-900/50 dark:text-yellow-400",
      error:
        "flex shadow-none! rounded-full bg-red-100/70 hover:bg-red-200/50 dark:hover:bg-red-900/40 border my-2 px-5 dark:bg-red-900/30 text-rose-500 dark:text-rose-400 ",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button> & {};

export const Button: FC<ButtonProps> = ({ variant, className, ...props }) => {
  return (
    <button
      {...props}
      disabled={props.disabled}
      className={button({ variant, className })}
    >
      {props.children}
    </button>
  );
};
