import { Container, Icons, Wrapper } from "@/components";
import { Roadmap } from "@/components/custom/roadmap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LampContainer } from "@/components/ui/lamp";
import Marquee from "@/components/ui/marquee";
import SectionBadge from "@/components/ui/section-badge";
import { features, perks, reviews } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* hero */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-20 h-full">
            <button className="group relative grid overflow-hidden rounded-full px-6 py-2 shadow-[0_1000px_0_0_hsl(var(--background))_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-muted" />
              <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-foreground/0.4"></span>
              <span className="z-10 py-1 text-sm text-foreground flex items-center justify-center gap-2">
                <Image
                  src="/icons/sparkles-dark.svg"
                  alt="✨"
                  width={24}
                  height={24}
                  className="w-5 h-5"
                />
                New: Play-to-Earn Feature
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>

            <div className="flex flex-col items-center mt-10 max-w-4xl w-11/12 md:w-full">
              <h1 className="text-5xl md:text-7xl lg:text-8xl md:!leading-tight font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                Conquer the Metaverse
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-8 text-center max-w-2xl">
                Embark on epic quests, build alliances, and earn real rewards in
                our blockchain-powered gaming universe.
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-10 md:mt-12 w-full justify-center">
                <Link href={"/games"}>
                  <Button size="lg" className="w-full rounded-full">
                    Start Your Adventure
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-border text-foreground hover:bg-primary/10 transition-all duration-300"
                >
                  Explore Marketplace
                </Button>
              </div>
            </div>

            <div className="relative flex items-center py-20 md:py-32 w-full">
              <div className="absolute top-1/2 left-1/2 -z-10 w-full h-full -translate-x-1/2 -translate-y-1/2 blur-[10rem] bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30"></div>
              <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-border lg:-m-4 lg:rounded-2xl bg-background/80 backdrop-blur-xl">
                <Image
                  src="/assets/preview.webp"
                  alt="Game Preview"
                  width={1200}
                  height={675}
                  quality={100}
                  className="rounded-lg lg:rounded-xl shadow-2xl ring-1 ring-border"
                />
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* how it works */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="The Process" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Three steps to dive into web3 gaming
            </h2>
            <p className="text-muted-foreground mt-6">
              Join the blockchain gaming revolution in just 3 simple steps
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4"
                >
                  <div className="flex items-center justify-center">
                    <perk.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{perk.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {perk.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* features */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Features" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Discover our powerful features
            </h2>
            <p className="text-muted-foreground mt-6">
              Astra offers a range of features to help you build a stunning
              website in no time
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex items-center justify-center mx-auto mt-8">
            <Icons.feature className="w-auto h-80" />
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start lg:items-start px-0 md:px-0"
                >
                  <div className="flex items-center justify-center">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {feature.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Roadmap */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Roadmap" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              The Rise of Blockchain Gaming
            </h2>
            <p className="text-muted-foreground mt-6">
              Explore the revolutionary journey of Web3 gaming, from its
              inception to the future of decentralized play
            </p>
          </div>
        </Container>
        <Roadmap />
      </Wrapper>

      {/* testimonials */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Our Customers" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Join Thousands of Players
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              {[
                "10K+ Active Players",
                "100K+ NFTs Minted",
                "$1M+ Total Rewards",
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-[hsl(223_47%_11%)] rounded-xl p-4 flex flex-col items-center"
                >
                  <span className="text-2xl font-bold text-[hsl(210_40%_98%)]">
                    {stat.split(" ")[0]}
                  </span>
                  <span className="text-sm text-[hsl(215.4_16.3%_56.9%)]">
                    {stat.split(" ").slice(1).join(" ")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
        <Container>
          <div className="py-10 md:py-20 w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
              <Marquee pauseOnHover className="[--duration:20s] select-none">
                {firstRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s] select-none"
              >
                {secondRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      {review.body}
                    </blockquote>
                  </figure>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* newsletter */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                Enter the Cryptoverse
                <br />
                Be Among the First
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                {`Join our exclusive whitelist for early access to the most
                immersive web3 gaming experience. Don't miss your chance to
                shape the future of blockchain gaming.`}
              </p>
              <Button variant="default" className="mt-6" asChild>
                <Link href="/whitelist-signup">
                  Join the Whitelist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </LampContainer>
        </Container>
        <Container className="relative">
          <div className="flex items-center justify-center w-full -mt-40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
              <div className="flex flex-col items-start gap-4 w-full">
                <h4 className="text-xl md:text-2xl font-semibold">
                  Join our newsletter
                </h4>
                <p className="text-base text-muted-foreground">
                  Be up to date with everything about Game
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                <form
                  action="#"
                  className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs"
                >
                  <Input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    variant="secondary"
                    className="w-full md:w-max"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing you agree with our{" "}
                  <Link href="#">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default HomePage;
