import React from "react";

interface AnimatedButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const AnimatedButton = ({ text, icon, onClick }: AnimatedButtonProps) => {
  return (
    <button
      className="relative overflow-hidden bg-black dark:bg-white dark:text-black text-white p-4 group/modal-btn transition-colors duration-300 px-4 py-2 rounded-md"
      onClick={onClick}
    >
      <span className="inline-block group-hover/modal-btn:translate-x-40 text-center transition duration-500">
        {text}
      </span>
      <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
        {icon}
      </div>
    </button>
  );
};

export default AnimatedButton;
