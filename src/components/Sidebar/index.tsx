import type { FC } from "react";
import { Logo } from "./Logo";
import { Search } from "lucide-react";
import { MainNavigation } from "./MainNavigation";
import { FooterNavigation } from "./FooterNavigation";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Inputs/Text/TextItem";

export const Sidebar:FC=()=>{
    return <aside className="border-r flex flex-col gap-6 border-zinc-200 px-5 py-8">
        <Logo/>
        <div className="flex w-full items-center gap-2 rounded-lg px-3 py-2">
            {/*<input type="text" placeholder="Search" className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"/>*/}
            <Input.Root>
            <Input.Prefix>
            <Search className="w-5 h-5 text-zinc-500"/>
            </Input.Prefix>
            <Input.Control placeholder="Search"/>
            </Input.Root>
        </div>
        <MainNavigation/>
        <div className="mt-auto flex flex-col gap-6">
            <FooterNavigation/>
            <UsedSpaceWidget/>
            <div className="h-px bg-zinc-200"/>
            <Profile/>
        </div>
    </aside>
}