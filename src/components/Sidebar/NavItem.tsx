import type { ElementType, FC } from "react";
import { ChevronDown } from "lucide-react";

export interface NavItemProps {
  title: string;
  icon: ElementType;
}

export const NavItem: FC<NavItemProps> = ({ title, icon: Icon }) => {
  return (
    <a
      href="/undefined"
      className="flex me-5 group items-center gap-3 rounded px-3 py-2 hover:bg-violet-300/10"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400" />
    </a>
  );
};
