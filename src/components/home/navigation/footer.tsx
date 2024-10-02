import Icons from "@/components/global/icons";
import { Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
      <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem] opacity-20"></div>
      <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-secondary w-72 h-72 rounded-full -z-10 blur-[14rem] opacity-20"></div>

      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <div className="flex items-start">
            <Icons.logo className="w-7 h-7" />
          </div>
          <p className="text-muted-foreground mt-4 text-sm text-start">
            Experience the future of gaming with our blockchain-powered
            adventures
          </p>
          <span className="mt-4 text-neutral-200 text-sm flex items-center">
            Powered by Web3 technology
            <Heart className="w-3.5 h-3.5 ml-1 fill-primary text-primary" />
          </span>
        </div>

        <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium text-white">Game</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href="/play"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Play Now
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/marketplace"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Marketplace
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/leaderboard"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Leaderboard
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/roadmap"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-white">Community</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link
                    href="/discord"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Discord
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/twitter"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/telegram"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Telegram
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/medium"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Medium
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium text-white">Resources</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href="/whitepaper"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Whitepaper
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/tokenomics"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Tokenomics
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/faq"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-white">Company</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link
                    href="/about"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/privacy"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/terms"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <p className="text-sm text-muted-foreground mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} Web3 Game House. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
