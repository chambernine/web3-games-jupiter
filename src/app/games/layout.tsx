import { FloatingDockCustom } from "@/components/custom/floating-dock-custom";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameLayout = ({ children }: Props) => {
  return (
    <div className="bg-gradient-to-br from-background to-background flex flex-col items-center w-full min-h-screen relative">
      <div className="flex-grow w-full overflow-y-auto">{children}</div>
      <div className="fixed bottom-0 left-0 right-0 flex justify-center">
        <FloatingDockCustom />
      </div>
    </div>
  );
};

export default GameLayout;
