"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { FaHome, FaFile, FaSuitcase } from "react-icons/fa";

const links = [
  {
    path: "/",
    label: "Home",
    icon: <FaHome className="text-xl" />,
  },
  {
    path: "/resume",
    label: "Resume",
    icon: <FaFile className="text-xl" />,
  },
  {
    path: "/projects",
    label: "Projects",
    icon: <FaSuitcase className="text-xl" />,
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <IoMenu className="text-3xl text-secondary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col z-50">
        {/*Title*/}
        <SheetTitle className="text-2xl text-center">Menu</SheetTitle>
        {/*Description*/}
        <SheetDescription />
        {/*Logo*/}
        <div className="mt-32 mb-24 text-center">
          <Link href="/">
            <h1 className="text-2xl italic tracking-wide font-anton">
              Batu <span className="text-accent-default"> B</span>
            </h1>
          </Link>
        </div>
        {/*Navigation*/}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={
                  pathname === link.path
                    ? " text-accent-default border-b-2 border-accent-default"
                    : " text-secondary hover:text-accent-hover"
                }
              >
                <div className="flex flex-row gap-2">
                  {link.icon}
                  {link.label}
                </div>
              </Link>
            );
          })}
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
