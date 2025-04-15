import type { FC } from "react";
import personaimporter from "@/utils/svgs/personaimporter";
import Image from "next/image";
import { Bell, BellDot } from "lucide-react";
import { Button } from "../Buttons/Button";

interface NotificationProps {
  title: string;
  subtitle: string;
  from: "jacob" | "andressa" | "kate" | "muria" | "rafaela" | "sarah";
  elapsedTime:string;
}

export const NotificationCard: FC<NotificationProps> = ({
  title,
  subtitle,
  from,
  elapsedTime
}) => {
  return (
    <div className="flex relative w-1/2 justify-between px-3 py-2 flex-nowrap rounded-md border border-violet-800 dark:border-violet-500">
      <div className="absolute z-2 -top-2 right-1">
        <BellDot
          color="transparent"
          strokeWidth={1}
          size={23}
          className="news-bell fill-violet-500 rounded-lg dark:fill-violet-300"
        />
      </div>
      <span className="font-semibold text-violet-700 dark:text-violet-300 flex flex-col gap-3">
        <span>{title}<span className="pl-2">|{"\t"}{elapsedTime}</span></span>
        <span className="font-medium text-violet-500 dark:text-violet-200">
          {subtitle}
        </span>
        <Button className="max-w-max">
          <span>Mark as Read</span>
        </Button>
      </span>
      <div className="relative size-max rounded-full">
        <Image
          src={personaimporter()[from]}
          width={50}
          height={50}
          className="rounded-full object-cover aspect-square"
          alt=""
        />
      </div>
    </div>
  );
};
