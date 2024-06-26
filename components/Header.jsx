import Link from "next/link";
import { Button } from "./ui/button";
//Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="2xl:py-14 xl:py-12 lg:py-10 py-8 text-secondary">
      <div className="container mx-auto flex items-center justify-between">
        {/*Logo*/}
        <Link href="/">
          <h1 className="2xl:text-5xl xl:text-4xl text-3xl italic tracking-wide font-anton">
            Batu <span className="text-accent-default"> B</span>
          </h1>
        </Link>
        {/*Navigation*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
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
