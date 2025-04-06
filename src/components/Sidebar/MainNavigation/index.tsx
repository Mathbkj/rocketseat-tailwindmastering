import type { FC } from "react";
import { NavItem } from "../NavItem";

export const MainNavigation: FC = () => {
  return (
    <nav className="space-y-0.5">
      <NavItem href="/" title="home" />
      <NavItem href="/dashboard" title="dashboard" />
      <NavItem href="/projects" title="projects" />
      <NavItem href="/reporting" title="reporting" />
      <NavItem href="/users" title="users" />
    </nav>
  );
};
