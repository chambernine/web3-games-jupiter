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
    <Container className="mx-auto px-4 py-8">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {gameData.map((game, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="relative group/card w-[320px] h-full rounded-xl p-6 border border-border/20 bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-foreground"
              >
                {game.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-muted-foreground text-sm mt-2"
              >
                {game.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={game.image}
                  height={200}
                  width={300}
                  className="w-full h-40 object-cover rounded-xl group-hover/card:shadow-xl shadow-primary/20"
                  alt={`${game.title} thumbnail`}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-foreground bg-background/50 border border-border/50 hover:bg-primary/20 transition-colors"
                >
                  Details
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={game.link}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary/80 to-secondary/80 text-primary-foreground text-xs font-bold hover:from-primary hover:to-secondary transition-colors"
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
