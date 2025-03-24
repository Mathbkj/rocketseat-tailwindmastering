import type { FC } from "react";
import { NavItem } from "../NavItem";
import {Cog, LifeBuoy} from "lucide-react";

export const FooterNavigation:FC=()=>{
    return <nav className="space-y-0.5">
        <NavItem title="Support" icon={LifeBuoy}/>
        <NavItem title="Settings" icon={Cog}/>
    </nav>
}