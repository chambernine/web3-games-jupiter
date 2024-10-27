"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface GameStats {
  timeSpent: number;
  isPlaying: boolean;
  showCongrats: boolean;
}

interface NumberTile {
  value: number;
  index: number;
}

const tileVariants: Variants = {
  initial: { scale: 0, rotate: -180 },
  animate: { scale: 1, rotate: 0, transition: { duration: 0.3 } },
  exit: { scale: 0, rotate: 180, transition: { duration: 0.3 } },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const generateUniqueRandomNumbers = (
  count: number,
  min: number,
  max: number
): number[] => {
  if (max - min + 1 < count) {
    throw new Error("Range is smaller than count of required numbers");
  }

  const numbers: Set<number> = new Set();
  while (numbers.size < count) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(randomNum);
  }

  return Array.from(numbers);
};

const NumberClearingGame: React.FC = () => {
  const [numbers, setNumbers] = useState<NumberTile[]>([]);
  const [nextNumber, setNextNumber] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [gameStats, setGameStats] = useState<GameStats>({
    timeSpent: 0,
    isPlaying: false,
    showCongrats: false,
  });

  const generateNumbers = (): void => {
    try {
      const uniqueNumbers = generateUniqueRandomNumbers(16, 1, 99);
      const nums: NumberTile[] = uniqueNumbers.map((value, index) => ({
        value,
        index,
      }));

      setNumbers(nums);
      setNextNumber(Math.min(...nums.map((n) => n.value)));
      setGameStats({
        timeSpent: 0,
        isPlaying: true,
        showCongrats: false,
      });
      setShowHint(false);
    } catch (error) {
      console.error("Error generating numbers:", error);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (gameStats.isPlaying && numbers.length > 0) {
      timer = setInterval(() => {
        setGameStats((prev) => ({
          ...prev,
          timeSpent: prev.timeSpent + 1,
        }));
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameStats.isPlaying, numbers.length]);

  const handleNumberClick = (clickedTile: NumberTile): void => {
    if (clickedTile.value === nextNumber) {
      const newNumbers = numbers.filter((n) => n.index !== clickedTile.index);
      setNumbers(newNumbers);

      const nextMin =
        newNumbers.length > 0
          ? Math.min(...newNumbers.map((n) => n.value))
          : null;
      setNextNumber(nextMin);
      setShowHint(false);

      setGameStats((prev) => ({
        ...prev,
        isPlaying: newNumbers.length > 0,
        showCongrats: newNumbers.length === 0,
      }));
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleCloseCongrats = (): void => {
    setGameStats((prev) => ({
      ...prev,
      showCongrats: false,
    }));
  };

  const handleMagicHelp = (): void => {
    setShowHint(true);
    // Auto-hide the hint after 2 seconds
    setTimeout(() => {
      setShowHint(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background flex justify-center items-center p-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 relative z-10 font-['Comic_Neue','Chalkboard','Orbitron',sans-serif] tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#FF00FF]">
          Number Clearing
        </h1>

        <div className="text-center mb-4 text-muted-foreground">
          Time: {formatTime(gameStats.timeSpent)}
        </div>

        <motion.div
          className="grid grid-cols-4 gap-2 bg-card p-4 rounded-xl shadow-lg aspect-square bg-gray-500"
          initial="hidden"
          animate="show"
        >
          <AnimatePresence mode="popLayout">
            {numbers.map((numberTile) => (
              <motion.button
                key={numberTile.index}
                layoutId={`number-${numberTile.index}`}
                variants={tileVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNumberClick(numberTile)}
                className={`
                  w-full aspect-square rounded-xl text-2xl font-bold 
                  flex items-center justify-center 
                  bg-[#C9E9D2] dark:bg-[#697565]
                  shadow-[inset_0_0_0_4px_rgba(0,0,0,0.1),inset_8px_4px_2px_rgba(0,0,0,0.1)]
                  hover:shadow-[inset_0_0_0_4px_rgba(0,0,0,0.1),inset_0_-3px_0_rgba(0,0,0,0.1)]
                  hover:brightness-105
                  active:shadow-[inset_0_0_0_4px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(0,0,0,0.1)]
                  ${
                    showHint && numberTile.value === nextNumber
                      ? "ring-2 ring-[#00FFFF] ring-opacity-50 animate-pulse"
                      : ""
                  }
                `}
              >
                <motion.span
                  className="text-primary-foreground text-responsive relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <span
                    className="relative z-10 font-['Comic_Neue','Chalkboard',sans-serif] text-5xl font-bold tracking-wider text-white select-none"
                    style={{
                      textShadow: "1px 1px 0 rgba(0,0,0,0.1)",
                    }}
                  >
                    {numberTile.value}
                  </span>
                </motion.span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            className="w-[184px] h-11 flex items-center justify-center gap-4 text-lg font-extrabold tracking-[2px] text-white bg-[#7B68EE] border-2 border-[#5A4ACB] rounded-xl shadow-[0_8px_0_#5A4ACB] transform -skew-x-10 transition-all duration-100 ease-in-out hover:filter hover:drop-shadow-[0_8px_12px_rgba(123,104,238,0.39)]"
            onClick={generateNumbers}
          >
            {gameStats.isPlaying ? "Restart" : "Start Game"}
          </button>
          {gameStats.isPlaying && (
            <button
              className="w-[184px] h-11 flex items-center justify-center gap-4 text-lg font-extrabold tracking-[2px] text-white bg-[#B19CD9] border-2 border-[#9A85C4] rounded-xl shadow-[0_8px_0_#9A85C4] transform -skew-x-10 transition-all duration-100 ease-in-out hover:filter hover:drop-shadow-[0_8px_12px_rgba(177,156,217,0.39)]"
              onClick={handleMagicHelp}
            >
              Magic Help
            </button>
          )}
        </motion.div>

        <AnimatePresence>
          {gameStats.showCongrats && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="fixed inset-0 flex items-center justify-center bg-background bg-opacity-80"
            >
              <div className="bg-card p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  Congratulations!
                </h2>
                <p className="text-xl mb-4 text-muted-foreground">
                  {`You've cleared all numbers in ${formatTime(
                    gameStats.timeSpent
                  )}!`}
                </p>
                <button
                  className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-2 px-4 rounded"
                  onClick={handleCloseCongrats}
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default NumberClearingGame;
