import { FloatingDockCustom } from "@/components/custom/floating-dock-custom";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">
      {children}
      <FloatingDockCustom />
    </div>
  );
};

export default GameLayout;
