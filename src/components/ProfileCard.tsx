import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import { Button } from "./Button"
import type { FC } from "react";

interface Props {
    name:string;
    role:"Software Engineer" | "UI/UX Designer" | "3D Modeler" | "DevOps"
}

export const ProfileCard:FC<Props>=({name,role})=> {
  return (
    <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative">
        <Image src="/team-card.png" alt="Profile photo" width={340} height={240} className="w-full" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-1">{role}</p>
        <p className="text-gray-500 text-sm mt-3">There are many variations of passages of Lorem Ipsum available</p>
        <div className="flex gap-2 mt-4">
          <Button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <Facebook className="w-5 h-5 text-gray-600" />
          </Button>
          <Button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <Instagram className="w-5 h-5 text-gray-600" />
          </Button>
          <Button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <Twitter className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
      </div>
    </div>
  )
}

