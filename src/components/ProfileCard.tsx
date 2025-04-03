import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import { Button } from "./Button"
import type { FC } from "react";

interface Props {
    name:string;
    func:"Software Engineer" | "UI/UX Designer" | "3D Modeler" | "DevOps" | "Department Header"
    src:string;
    className:string;
}

export const ProfileCard:FC<Props>=({name,func,src,className})=> {
  const base="max-w-xs bg-white dark:bg-white/5 rounded-lg overflow-hidden shadow-sm";
  return (
    <div className={`${base} ${className || ""}`}>
      <div className="relative">
        <Image src={src} alt="Profile photo" width={340} height={240} className=""/>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-violet-800 dark:text-violet-300">{name}</h2>
        <p className="text-gray-500 dark:text-gray-300 mt-1">{func}</p>
        <p className="text-gray-500 dark:text-gray-300 text-sm mt-3">There are many variations of passages of Lorem Ipsum available</p>
        <div className="flex gap-2 mt-4">
          <Button variant="outline" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <Facebook className="w-5 h-5 text-gray-600" />
          </Button>
          <Button variant="outline" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <Instagram className="w-5 h-5 text-gray-600" />
          </Button>
          <Button variant="outline" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <Twitter className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
      </div>
    </div>
  )
}

