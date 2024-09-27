import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Icons } from "@/components";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const NavItems = () => (
    <ul className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-8">
      <Link href="/games" className="hover:text-foreground/80 text-sm">
        Games
      </Link>
      <Link href="/marketplace" className="hover:text-foreground/80 text-sm">
        Marketplace
      </Link>
      <Link href="/roadmap" className="hover:text-foreground/80 text-sm">
        Roadmap
      </Link>
      <Link href="/wallet" className="hover:text-foreground/80 text-sm">
        Wallet
      </Link>
      <Link href="/community" className="hover:text-foreground/80 text-sm">
        Community
      </Link>
    </ul>
  );

  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="w-8 h-8" />
          <span className="text-lg font-medium">Web3 Game</span>
        </Link>
        <nav className="hidden md:block">
          <NavItems />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden p-0">
              <Menu />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <NavItems />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
