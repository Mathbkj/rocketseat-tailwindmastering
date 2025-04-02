import { LogOut } from "lucide-react";
import type { FC } from "react";
import { Button } from "../Button";
import { ProfileImg } from "../ProfileImg";

export const Profile:FC=()=>{
    return <div className="grid grid-cols-(--profile) items-center gap-3">
        <ProfileImg className="w-10! h-10!"/>
        <div className="flex truncate flex-col">
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">Matheus Godinho</span>
            <span className="text-sm truncate text-zinc-500 dark:text-zinc-400">matheusgblasel@hotmail.com</span>
        </div>
        <Button type="button" variant="ghost" className="ml-auto p-2 rounded-md hover:bg-zinc-100">
            <LogOut className="w-5 h-5"/>
        </Button>
    </div>
}