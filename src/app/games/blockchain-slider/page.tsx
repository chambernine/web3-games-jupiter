"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const GRID_SIZE = 4;
const CELL_COUNT = GRID_SIZE * GRID_SIZE;
const EMPTY_INDEX = CELL_COUNT - 1;

export default function BlockchainSlider() {
  const [tiles, setTiles] = useState(
    Array.from({ length: CELL_COUNT }, (_, i) => i)
  );
  const [isComplete, setIsComplete] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && !isComplete) {
      timer = setInterval(() => {
        setTimeSpent((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, isComplete]);

  useEffect(() => {
    const complete = checkCompletion();
    setIsComplete(complete);
    if (complete && isPlaying) {
      setShowCongrats(true);
      setIsPlaying(false);
    }
  }, [tiles, isPlaying]);

  const shuffleTiles = () => {
    let shuffled;
    do {
      shuffled = Array.from({ length: CELL_COUNT }, (_, i) => i).sort(
        () => Math.random() - 0.5
      );
    } while (!isSolvable(shuffled));

    setTiles(shuffled);
    setIsPlaying(true);
    setIsComplete(false);
    setTimeSpent(0);
    setMoveCount(0);
    setShowCongrats(false);
  };

  const surrender = () => {
    setTiles(Array.from({ length: CELL_COUNT }, (_, i) => i));
    setIsPlaying(false);
    setIsComplete(false);
    setTimeSpent(0);
    setMoveCount(0);
    setShowCongrats(false);
  };

  const isSolvable = (arr: number[]) => {
    let invCount = 0;
    for (let i = 0; i < CELL_COUNT - 1; i++) {
      for (let j = i + 1; j < CELL_COUNT; j++) {
        if (
          arr[i] !== EMPTY_INDEX &&
          arr[j] !== EMPTY_INDEX &&
          arr[i] > arr[j]
        ) {
          invCount++;
        }
      }
    }
    const emptyRowFromBottom = Math.floor(
      (CELL_COUNT - 1 - arr.indexOf(EMPTY_INDEX)) / GRID_SIZE
    );
    return (invCount % 2 === 0) === (emptyRowFromBottom % 2 === 0);
  };

  const moveTile = useCallback(
    (index: number) => {
      if (!isPlaying) return;
      const emptyIndex = tiles.indexOf(EMPTY_INDEX);
      if (isAdjacent(index, emptyIndex)) {
        const newTiles = [...tiles];
        [newTiles[index], newTiles[emptyIndex]] = [
          newTiles[emptyIndex],
          newTiles[index],
        ];
        setTiles(newTiles);
        setMoveCount((prevCount) => prevCount + 1);
      }
    },
    [isPlaying, tiles]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isPlaying) return;
      const emptyIndex = tiles.indexOf(EMPTY_INDEX);
      const emptyRow = Math.floor(emptyIndex / GRID_SIZE);
      const emptyCol = emptyIndex % GRID_SIZE;

      switch (e.key) {
        case "ArrowUp":
          if (emptyRow < GRID_SIZE - 1) moveTile(emptyIndex + GRID_SIZE);
          break;
        case "ArrowDown":
          if (emptyRow > 0) moveTile(emptyIndex - GRID_SIZE);
          break;
        case "ArrowLeft":
          if (emptyCol < GRID_SIZE - 1) moveTile(emptyIndex + 1);
          break;
        case "ArrowRight":
          if (emptyCol > 0) moveTile(emptyIndex - 1);
          break;
      }
    },
    [isPlaying, tiles, moveTile]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const isAdjacent = (index1: number, index2: number) => {
    const row1 = Math.floor(index1 / GRID_SIZE);
    const col1 = index1 % GRID_SIZE;
    const row2 = Math.floor(index2 / GRID_SIZE);
    const col2 = index2 % GRID_SIZE;
    return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
  };

  const checkCompletion = () => {
    return tiles.every((tile, index) => tile === index % CELL_COUNT);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const tileVariants: Variants = {
    initial: { scale: 0, rotate: -180 },
    enter: { scale: 1, rotate: 0, transition: { duration: 0.3 } },
    exit: { scale: 0, rotate: 180, transition: { duration: 0.3 } },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background flex justify-center items-center p-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          Blockchain Slider
        </h1>
        <div className="flex justify-between mb-4 text-muted-foreground">
          <div>Time: {formatTime(timeSpent)}</div>
          <div>Moves: {moveCount}</div>
        </div>
        <motion.div
          className="grid grid-cols-4 gap-2 bg-card p-4 rounded-lg shadow-lg aspect-square"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence mode="popLayout">
            {tiles.map((tile, index) => (
              <motion.button
                key={tile}
                layoutId={`tile-${tile}`}
                variants={tileVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full aspect-square rounded-lg text-2xl font-bold flex items-center justify-center ${
                  tile === EMPTY_INDEX
                    ? "bg-muted"
                    : "bg-gradient-to-br from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
                } ${isComplete ? "bg-muted hover:bg-secondary" : ""}`}
                onClick={() => moveTile(index)}
              >
                {tile !== EMPTY_INDEX && (
                  <motion.span
                    className="text-primary-foreground text-responsive"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {tile + 1}
                  </motion.span>
                )}
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
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-2 px-4 rounded"
            onClick={shuffleTiles}
          >
            {isPlaying ? "Restart" : "Start Game"}
          </button>
          {isPlaying && (
            <button
              className="bg-destructive hover:bg-destructive/80 text-destructive-foreground font-bold py-2 px-4 rounded"
              onClick={surrender}
            >
              Surrender
            </button>
          )}
        </motion.div>
        {isPlaying && (
          <div className="mt-4 text-center text-muted-foreground">
            Use arrow keys or click tiles to move them.
          </div>
        )}
        <AnimatePresence>
          {showCongrats && (
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
                <p className="text-xl mb-4 text-muted-foreground">{`You've solved the puzzle in ${formatTime(
                  timeSpent
                )} with ${moveCount} moves!`}</p>
                <button
                  className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-2 px-4 rounded"
                  onClick={() => setShowCongrats(false)}
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
}
