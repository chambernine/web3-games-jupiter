"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconDeviceGamepad2,
  IconWallet,
  IconTrophy,
  IconUsers,
  IconSettings,
  IconShoppingCart,
} from "@tabler/icons-react";

export function FloatingDockCustom() {
  const links = [
    {
      title: "Games",
      icon: (
        <IconDeviceGamepad2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#games",
    },
    {
      title: "Wallet",
      icon: (
        <IconWallet className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#wallet",
    },
    {
      title: "Marketplace",
      icon: (
        <IconShoppingCart className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#marketplace",
    },
    {
      title: "Leaderboard",
      icon: (
        <IconTrophy className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#leaderboard",
    },
    {
      title: "Community",
      icon: (
        <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#community",
    },
    {
      title: "Settings",
      icon: (
        <IconSettings className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#settings",
    },
  ];
  return (
    <div className="items-center justify-center absolute bottom-1 ">
      <FloatingDock items={links} />
    </div>
  );
}
