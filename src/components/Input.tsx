import type { ComponentProps } from "react";

export interface Props{
    className:string;
}
interface PrefixProps extends ComponentProps<'div'>{}

export function Prefix(props:PrefixProps){
    return <div {...props}/>
}
interface ControlProps extends ComponentProps<'input'>{};


export function Control(props:ControlProps){
    return <input {...props} placeholder="Search" className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"/>
}
export interface RootProps extends ComponentProps<"div"> {}

export function Root(props:RootProps){
    return <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm" {...props}/>
}