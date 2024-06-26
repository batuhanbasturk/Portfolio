"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/resume",
    label: "Resume",
  },
  {
    path: "/projects",
    label: "Projects",
  },
];
const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={
              pathname === link.path
                ? "text-accent-default border-b-2 border-accent-default"
                : "text-secondary hover:text-accent-hover"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
