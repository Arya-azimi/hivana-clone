import { navItem } from "@/lib";
import { ArrowDown, X } from "lucide-react";
import Link from "next/link";

type OffcanvasProps = {
  menuState: boolean;
  toggle: () => void;
};

export function Offcanvas({ menuState, toggle }: OffcanvasProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          menuState
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={toggle}
          className="absolute inset-0 bg-black/50"
          aria-hidden="true"
        ></div>

        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            menuState ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4">
            <div className="flex justify-end mb-4">
              <button onClick={toggle} className="p-2">
                <X size={24} />
              </button>
            </div>
            <ul>
              {navItem.map((item) => (
                <li key={item.text} className={item.class}>
                  <Link href={item.link}>{item.text}</Link>
                </li>
              ))}
              <li className="text-emerald-950 hover:text-amber-500">
                <Link href="" className="flex items-center flex-row">
                  درخواست سایت{" "}
                  <ArrowDown className="hidden lg:flex" size={17} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
