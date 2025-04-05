import type { ComponentProps, FC } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const div = tv({
  base: [
    "rounded-lg px-3 py-2 text-sm font-semibold outline-none shadow-sm",
    "active:opacity-88 transition-all",
    "disabled:cursor-default!"
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
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
type WrapperProps = ComponentProps<"div"> & VariantProps<typeof div> & {};

export const Wrapper: FC<WrapperProps> = ({ variant, className, ...props }) => {
  return (
    <div
      {...props}
      className={div({ variant, className })}
    >
      {props.children}
    </div>
  );
};
