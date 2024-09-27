"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
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
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
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
    <div className="items-center justify-center absolute bottom-8 ">
      <FloatingDock mobileClassName="absolute bottom-0 left-0" items={links} />
    </div>
  );
}
