"use client";

import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { usePathname } from "next/navigation";

export default function Navigationbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/headphones", label: "Headphones" },
    { href: "/speakers", label: "Speakers" },
    { href: "/earphones", label: "Earphones" },
  ];

  return (
    <div className="w-full max-w-[70rem] mx-auto flex items-center justify-between text-white-100 py-8 px-4 md:px-0 border-b-[0.5px] border-white-300">
      <div className="md:w-fit w-full flex md:gap-8 justify-between md:justify-start">
        <TiThMenu className="w-6 h-6 cursor-pointer lg:hidden" />
        <img src="./HomeImages/AudiophileLogo.png" alt="Logo" />
        <div className="md:hidden flex"></div>
      </div>
      <div className="subTitle w-fit uppercase lg:flex gap-6 cursor-pointer hidden">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`cursor-pointer ${
              pathname === href ? "text-orange-100" : "hover:text-white-300"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <MdOutlineShoppingCart className="w-6 h-6 cursor-pointer" />
    </div>
  );
}
