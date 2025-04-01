"use client"
import { useEffect, useState, type FC } from "react";
import { Button } from "../Button";
import { Circle, Moon, Sun } from "lucide-react";

export const ThemeToggler: FC = () => {
  const [isDark, setDark] = useState<boolean>(false);
  useEffect(() => {
    document.documentElement.classList.add("transition-all","duration-300");
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDark]);
  return (
    <Button type="button" variant="ghost" onClick={() => setDark(!isDark)} className="relative bg-neutral-300/30 rounded-full flex items-center gap-2">
      {!isDark && <Moon className={`transition-transform ${!isDark ? "translate-x-8":"translate-x-0"}`} size={20}/>}
      {isDark && <Sun className={`transition-transform ${!isDark? "translate-x-0":"-translate-x-1"}`} size={20}/>}
      <Circle className={`duration-300 ${!isDark ? "-translate-x-8":"translate-x-1"} transition-transform`} size={20}/>
    </Button>
  );
};
