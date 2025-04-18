"use client";

import { BioContext } from "@/contexts/BioContext";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { useContext, type PropsWithChildren } from "react";

export type SelectItemProps = Select.SelectItemProps & {
  text: string;
};
type SelectProps = Select.SelectProps &
  PropsWithChildren & {
    className?: string;
    placeholder: string;
    variant?: "def" | "withLabelRow";
    label?: string;
  };

export function Item({ text, ...props }: SelectItemProps) {
  return (
    <Select.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700"
      {...props}
    >
      <Select.ItemText
        asChild
        className="text-black disabled:placeholder-zinc-400 dark:disabled:placeholder-zinc-700"
      >
        <span className="dark:text-zinc-100">{text}</span>
      </Select.ItemText>

      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  );
}
export function Container({
  children,
  placeholder,
  variant = "def",
  ...props
}: SelectProps) {
  const { handleLayout } = useContext(BioContext);
  const base =
    "relative flex outline-none h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 disabled:data-[placeholder]:text-zinc-400 dark:disabled:data-[placeholder]:text-zinc-700 dark:data-[placeholder]:text-zinc-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10 disabled:bg-zinc-500/10 disabled:cursor-not-allowed! mx-1";

  return (
    <Select.Root
      onValueChange={(type) => handleLayout({ textType: type })}
      {...props}
    >
      <Select.Trigger
        disabled={props.disabled}
        className={`${base} ${props.className}`}
      >
        {variant === "def" ? (
          <>
            <Select.Value placeholder={placeholder} />
            <Select.Icon>
              <ChevronDown
                className={`h-5 w-5 ${props.disabled ? "text-zinc-400/50 dark:text-zinc-700" : "text-zinc-400"}`}
              />
            </Select.Icon>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center size-full">
              <span className="text-xs text-zinc-400 uppercase tracking-wider">
                {props.label || "Label"}
              </span>
              <div className="absolute flex items-center h-full gap-1 right-0 px-2 border-l border-l-zinc-300 rounded-r-lg bg-zinc-100 dark:bg-zinc-100/10 dark:border-l-zinc-600">
                <Select.Value placeholder={placeholder} />
                <Select.Icon>
                  <ChevronDown
                    className={`h-5 w-5 ${
                      props.disabled
                        ? "text-zinc-400/50 dark:text-zinc-700"
                        : "text-zinc-400"
                    }`}
                  />
                </Select.Icon>
              </div>
            </div>
          </>
        )}
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg border border-zinc-200 bg-white animate-fade-down dark:bg-zinc-800 dark:border-zinc-700"
        >
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
