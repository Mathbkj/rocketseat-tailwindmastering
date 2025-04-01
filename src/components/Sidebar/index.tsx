"use client";

import { useState, type FC } from "react";
import { Logo } from "./Logo";
import { Menu, Search } from "lucide-react";
import { MainNavigation } from "./MainNavigation";
import { FooterNavigation } from "./FooterNavigation";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Inputs/Text/TextItem";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Button } from "../Button";
import { ThemeToggler } from "../Theme/ThemeToggler";


export const Sidebar: FC = () => {
  return (
    <Collapsible.Root className="fixed bg-white shadow-sm data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen left-0 top-0 right-0 z-20 border-r flex flex-col gap-6 border-zinc-200 px-5 py-8 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-4 dark:bg-zinc-900 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <div className="flex gap-10 items-center">
        <Logo />
        <ThemeToggler/>
        </div>
        
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="CollapsableContent flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <div className="flex w-full items-center gap-2 rounded-lg px-3 py-2">
          <Input.Root>
            <Input.Prefix>
              <Search className="w-5 h-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control placeholder="Search" />
          </Input.Root>
        </div>
        <MainNavigation />
        <div className="mt-auto flex flex-col gap-6">
          <FooterNavigation />
          <UsedSpaceWidget />
          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
