"use client";
import React from "react";
import { Container } from "@/components";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

const gameData = [
  {
    title: "Blockchain Slider",
    description: "Classic 15 puzzle with a crypto twist in this game",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/games/blockchain-slider",
  },
  {
    title: "CryptoLogic",
    description: "Solve complex puzzles to earn crypto rewards",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/cryptologic",
  },
  {
    title: "NFT Sudoku",
    description: "Play Sudoku and mint your completed puzzles as NFTs",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/nft-sudoku",
  },
  {
    title: "Crypto Match",
    description: "Test your memory with this blockchain-themed card matching",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/crypto-match",
  },
  {
    title: "DeFi Tetris",
    description:
      "Stack blocks and earn yield in this DeFi-inspired Tetris clone",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/defi-tetris",
  },
  {
    title: "Blockchain Minesweeper",
    description: "Clear the minefield and discover hidden crypto treasures",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://example.com/blockchain-minesweeper",
  },
];

export default function Page() {
  return (
    <Container className="flex items-center justify-center">
      <div className="grid gap-8 w-full p-8 sm:grid-cols-1 md:grid-cols-2 max-w-7x lg:grid-cols-3  xl:grid-cols-4">
        {gameData.map((game, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[320px] h-[auto] rounded-xl p-6 border ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {game.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {game.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={game.image}
                  height="500"
                  width="300"
                  className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Details
                </CardItem>

                <CardItem
                  translateZ={20}
                  as={Link}
                  href={game.link}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Play now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </Container>
  );
}
