import type { FC, ReactElement, ReactNode } from "react";
import { Button } from "./Button";
import {Check, XCircle as X} from "lucide-react";

interface Props{
    title:"Basic" | "Standard" | "Premium"
    cost:string;
}
const Checked:FC=()=><Check size={25} color="white" className="bg-violet-800 rounded-full"/>

const NotChecked:FC=()=> <X size={25}/>


export const PlanUnity:FC<Props>=({title,cost})=>{
return <Button variant="ghost" className="flex group hover:scale-105 relative items-center flex-col px-8">
    <div className="flex flex-col gap-4">
        <span className="text-sm! text-zinc-800 dark:text-zinc-400">{title}</span>
        <span className="text-lg! text-zinc-900 dark:text-zinc-200">${cost}</span>
    </div>
    <div className="w-24 mt-10 h-px border border-zinc-800/10 dark:border-zinc-700/30"/>
    <div className="mt-8 space-y-10">
    {title==="Basic"?<NotChecked/>:<Checked/>}
    {title==="Premium" ?<Checked/>:<NotChecked/>}
    <Checked/>
    <Checked/>
    <span>{title==="Basic" ? 10:title==="Standard" ? 20: title==="Premium" ? 40:null}</span>
    </div>
    <Button type="button" className="my-10 opacity-0 group-hover:opacity-100">
        <span>Choose Plan</span>
    </Button>
</Button>
}