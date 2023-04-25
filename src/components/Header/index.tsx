"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/letreiro.png";
import { usePathname } from "next/navigation";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function Header() {
  const route = usePathname();
  const hasContent = route.split("/")[2] !== undefined;

  return (
    <header className="p-8 bg-gray-900 rounded-b-full">
      {hasContent && (
        <Link href="/">
          <span className=" text-white top-8 left-10 absolute flex text-lg justify-center items-center gap-2">
            <BsArrowLeftCircle fontSize={28} />
            <p className="hidden sm:block">Back</p>
          </span>
        </Link>
      )}
      <div className="flex items-center justify-center">
        <Image width={220} height={220} src={logo} alt="Mnews logo" />
      </div>
    </header>
  );
}
