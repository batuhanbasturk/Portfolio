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
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { FaHome, FaFile, FaSuitcase } from "react-icons/fa";
import logo from "@/public/assets/logo.svg";
import ThemeSwitch from "./ThemeSwitch";

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
        <IoMenu className="text-4xl text-tab dark:text-secondary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col z-50">
        {/*Title*/}
        <SheetTitle />
        {/*Description*/}
        <SheetDescription />
        {/*Logo*/}
        <div className="mt-24 mb-24 text-center">
          <Link
            href="/"
            className="flex justify-center items-center pointer-events-none"
          >
            <Image
              src={logo}
              alt="Logo"
              className="2xl:w-[100px] 2xl:h-[100px] xl:w-[80px] xl:h-[80px] w-[60px] h-[60px] pointer-events-auto cursor-pointer"
            />
          </Link>
        </div>
        {/*Navigation*/}
        <nav className="flex flex-col justify-center items-center gap-8">
          <ThemeSwitch />
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={
                  pathname === link.path
                    ? " text-accent-default border-b-2 border-accent-default"
                    : "text-primary dark:text-secondary hover:text-accent-hover dark:hover:text-accent-hover font-semibold transition-colors duration-300 ease-in-out"
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
