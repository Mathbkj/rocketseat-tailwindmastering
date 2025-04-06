import { useContext, useState, type ElementType, type FC } from "react";
import {
  ChartBar,
  ChartBarIncreasing,
  ChartColumnBig,
  ChartColumnIncreasing,
  ChevronDown,
  Home,
  LifeBuoy,
  List,
  ListFilter,
  Settings,
  TestTube,
  User,
} from "lucide-react";
import Link from "next/link";
import { SidebarContext, type SelectedProps } from "@/contexts/SidebarContext";
import { formatText } from "@/utils/formatText";
import { tv } from "tailwind-variants";

export interface NavItemProps {
  title: keyof SelectedProps;
  href:
    | "/"
    | "/dashboard"
    | "/projects"
    | "/tasks"
    | "/reporting"
    | "/users"
    | "/support"
    | "/settings";
}

const link = tv({
  slots: {
    container:
      "flex group me-5 group items-center gap-3 rounded px-3 py-2 hover:bg-violet-300/10 dark:hover:bg-zinc-800 transition-all",
    icon: "h-5 w-5 text-zinc-500",
    span: "font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300",
    chevron:
      "ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400 dark:text-zinc-600",
  },
  variants: {
    state: {
      active: {
        container:
          "bg-violet-300/20 dark:bg-zinc-700 text-violet-500 dark:text-violet-300",
        icon: "text-violet-500 dark:text-violet-300",
        span: "text-violet-500 dark:text-violet-300",
        chevron: "text-violet-500 dark:text-violet-300",
      },
    },
  },
});

export const NavItem: FC<NavItemProps> = ({ title, href }) => {
  const { handleSelected, ...rest } = useContext(SidebarContext);
  const { container, icon, span, chevron } = link();

  const isActive = rest[title];
  const text = formatText(title, "title");
  return (
    <Link
      href={href}
      onClick={() => {
        handleSelected(title);
      }}
      className={container({ state: isActive ? "active" : undefined })}
    >
      {title === "home" && (
        <Home className={icon({ state: isActive ? "active" : undefined })} />
      )}
      {title === "dashboard" && (
        <ChartColumnBig
          className={icon({ state: isActive ? "active" : undefined })}
        />
      )}
      {title === "projects" && (
        <TestTube
          className={icon({ state: isActive ? "active" : undefined })}
        />
      )}
      {title === "reporting" && (
        <ListFilter
          className={icon({ state: isActive ? "active" : undefined })}
        />
      )}
      {title === "users" && (
        <User className={icon({ state: isActive ? "active" : undefined })} />
      )}
      {title === "support" && (
        <LifeBuoy
          className={icon({ state: isActive ? "active" : undefined })}
        />
      )}
      {title === "settings" && (
        <Settings
          className={icon({ state: isActive ? "active" : undefined })}
        />
      )}
      <span className={span({ state: isActive ? "active" : undefined })}>
        {text}
      </span>
      <ChevronDown
        className={chevron({ state: isActive ? "active" : undefined })}
      />
    </Link>
  );
};
