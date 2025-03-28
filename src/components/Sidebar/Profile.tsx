import { LogOut } from "lucide-react";
import type { FC } from "react";

export const Profile:FC=()=>{
    return <div className="grid grid-cols-(--profile) items-center gap-3">
        <img src="https://github.com/Mathbkj.png" className="w-10 h-10 rounded-full" alt=""/>
        <div className="flex truncate flex-col">
            <span className="text-sm font-semibold text-zinc-700">Matheus Godinho</span>
            <span className="text-sm truncate text-zinc-500">matheusgblasel@hotmail.com</span>
        </div>
        <button type="button" className="ml-auto p-2 rounded-md hover:bg-zinc-100">
            <LogOut className="w-5 h-5 text-zinc-500"/>
        </button>

    </div>
}