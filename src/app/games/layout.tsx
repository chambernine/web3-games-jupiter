import { FloatingDockCustom } from "@/components/custom/floating-dock-custom";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameLayout = ({ children }: Props) => {
  return (
    <div className="bg-gradient-to-br from-[#1a1b26] to-[#24283b] flex flex-col items-center w-full h-screen relative overflow-hidden">
      <div className="flex-grow w-full overflow-y-auto pb-20">{children}</div>
      <div className="fixed bottom-0 left-0 right-0 flex justify-center">
        <FloatingDockCustom />
      </div>
    </div>
  );
};

export default GameLayout;
