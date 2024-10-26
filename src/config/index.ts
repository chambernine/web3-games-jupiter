import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
  title: {
    default: "GamesHouse - Your Web3 Gaming Multiverse",
    template: `%s | GamesHouse`,
  },
  description:
    "GamesHouse is your premier Web3 gaming platform. Explore, play, and connect with an expansive collection of blockchain-powered games, all united in one revolutionary digital space.",
  icons: {
    icon: [
      {
        url: "/icons/favicon.svg",
        href: "/icons/favicon.svg",
        rel: "icon",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "GamesHouse - Your Web3 Gaming Multiverse",
    description:
      "Welcome to GamesHouse, where the future of gaming unfolds. Dive into our diverse ecosystem of Web3 games, forge connections with fellow gamers, and immerse yourself in the cutting-edge world of blockchain gaming.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@gameshouse_web3",
    title: "GamesHouse - Your Web3 Gaming Multiverse",
    description:
      "Welcome to GamesHouse, where the future of gaming unfolds. Dive into our diverse ecosystem of Web3 games, forge connections with fellow gamers, and immerse yourself in the cutting-edge world of blockchain gaming.",
  },
  metadataBase: new URL("https://gameshouse.io"),
};
