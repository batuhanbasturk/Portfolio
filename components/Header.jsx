import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import logo from "../public/assets/logo.svg";
//Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="2xl:py-12 xl:py-10 lg:py-8 py-6 text-secondary">
      <div className="container mx-auto flex items-center justify-between">
        {/*Logo*/}
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            priority
            className="2xl:w-[100px] 2xl:h-[100px] xl:w-[80px] xl:h-[80px] lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] rounded-lg cursor-pointer"
          />
        </Link>
        {/*Navigation*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
          <ThemeSwitch />
        </div>
        {/*Mobile Navigation*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
