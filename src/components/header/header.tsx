"use client";

import { HedaerLogo, navItem } from "@/lib";
import { ArrowDown, Search, TextAlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Offcanvas } from "./offcanvas";
import { useToggle } from "@/hooks";

export default function Header() {
  const logoInf = HedaerLogo.logo;
  const [isMenuOpen, toggleMenu] = useToggle();
  return (
    <>
      <header className="max-w-7xl mx-auto px-6">
        <div className=" border mx-auto border-black mt-4 py-3 rounded-2xl">
          <div className="px-4 flex justify-between items-center">
            <div className="flex justify-between w-2/3 items-center">
              <Image
                src={logoInf.src}
                width={logoInf.width}
                height={logoInf.height}
                alt={logoInf.alt}
              />
              <ul className="lg:flex justify-between items-center w-full mr-12 hidden ">
                {navItem.map((item) => (
                  <li key={item.text} className={item.class}>
                    <Link href={item.link}>{item.text}</Link>
                  </li>
                ))}
                <li className="text-emerald-950 cursor-pointer hover:text-amber-500">
                  <Link href="" className="flex items-center flex-row">
                    درخواست سایت <ArrowDown size={17} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <div className="border rounded-b-xl rounded-tl-2xl p-1">
                <Search />
              </div>
              <div
                className="border rounded-b-xl rounded-tl-2xl p-1 lg:hidden cursor-pointer"
                onClick={toggleMenu}
              >
                <TextAlignJustify />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas menuState={isMenuOpen} toggle={toggleMenu} />
    </>
  );
}
