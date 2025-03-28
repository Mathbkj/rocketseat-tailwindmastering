'use client'
 
 import * as Select from '@radix-ui/react-select'
 import { Check, ChevronDown } from 'lucide-react'
import type { PropsWithChildren } from 'react'
 
 export type SelectItemProps = Select.SelectItemProps & {
   text: string
 }
 type SelectProps  = Select.SelectProps & PropsWithChildren &{
    placeholder: string
  } 
 
 export function Item({ text, ...props }: SelectItemProps) {
   return (
     <Select.Item
       className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
       {...props}
     >
       <Select.ItemText className="text-black">{text}</Select.ItemText>
 
       <Select.ItemIndicator>
         <Check className="h-4 w-4 text-violet-500" />
       </Select.ItemIndicator>
     </Select.Item>
   )
}
export function Container({ children, placeholder,...props }: SelectProps) {
    return (
      <Select.Root {...props}>
        <Select.Trigger className="flex outline-none h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
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
            className="z-10 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg border border-zinc-200 bg-white"
          >
            <Select.Viewport>{children}</Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    )
  }