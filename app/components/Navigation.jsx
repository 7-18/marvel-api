"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BsBellFill } from "react-icons/bs";
import { RiSettings2Fill } from "react-icons/ri";

const links = [
  { href: "/", label: "Home" },
  { href: "/characters", label: "Characters" },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="container mx-auto flex justify-between uppercase">
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/marvel-logo.webp"
              alt="Marvel Logo"
              width={150}
              height={40}
              priority
            />
          </Link>
          {links.map(({ href, label }) => (
            <Link
              className={`${
                pathname === href
                  ? "text-gold bg-navigation-hover"
                  : "text-white"
              } hover:text-gold transition-colors flex items-center px-2 text-sm relative ml-6`}
              key={href}
              href={href}
            >
              {label}
              {pathname === href && (
                <Image
                  src="/vector.svg"
                  alt="Vector"
                  className="absolute inset-x-0 top-0 mx-auto"
                  width={39}
                  height={19}
                />
              )}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <button className="text-white hover:text-gold transition-colors">
            <BsBellFill />
          </button>
          <button className="ml-4 text-white hover:text-gold transition-colors">
            <RiSettings2Fill />
          </button>
        </div>
      </div>
    </nav>
  );
};
