'use client'
 
 import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import type { PropsWithChildren } from 'react'
 
 export type SelectItemProps = Select.SelectItemProps & {
   text: string
 }
 type SelectProps  = Select.SelectProps & PropsWithChildren &{
    className?:string;
    placeholder: string
} 
 
 export function Item({ text, ...props }: SelectItemProps) {
   return (
     <Select.Item
       className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700"
       {...props}
     >
       <Select.ItemText asChild className="text-black">
        <span className="dark:text-zinc-100">{text}</span>
        </Select.ItemText>
 
       <Select.ItemIndicator>
         <Check className="h-4 w-4 text-violet-500" />
       </Select.ItemIndicator>
     </Select.Item>
   )
}
export function Container({ children, placeholder,...props }: SelectProps) {
  const base="flex outline-none h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 dark:data-[placeholder]:text-zinc-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10";
    return (
      <Select.Root {...props}>
        <Select.Trigger className={`${base} ${props.className || ""}`}>
          <Select.Value
            placeholder={placeholder}
            className="text-black"
          />
          <Select.Icon>
            <ChevronDown className="h-5 w-5 text-zinc-500" />
          </Select.Icon>
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
    )
  }