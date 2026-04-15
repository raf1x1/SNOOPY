import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PawPrint, Moon, Sun, Heart } from "lucide-react";

export default function InteractiveSnoopy() {
  const [isSleeping, setIsSleeping] = useState(true);
  const [isWagging, setIsWagging] = useState(false);
  const [isChasingTail, setIsChasingTail] = useState(false);
  const [isDancing, setIsDancing] = useState(false);

  const toggleSleep = () => {
    setIsSleeping(!isSleeping);
    setIsChasingTail(false);
    setIsDancing(false);
    if (isSleeping) {
      const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
      audio.volume = 0.2;
      audio.play().catch(() => {});
    }
  };

  const triggerChase = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSleeping || isDancing) return;
    setIsChasingTail(true);
    setTimeout(() => setIsChasingTail(false), 2000);
  };

  const triggerDance = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSleeping || isChasingTail) return;
    setIsDancing(true);
    setTimeout(() => setIsDancing(false), 2000);
  };

  return (
    <section className="py-12 px-4 flex flex-col items-center">
      <div className="relative group">
        {/* Speech Bubble */}
        <AnimatePresence>
          {isSleeping ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white border-2 border-foreground px-4 py-2 rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] z-20 whitespace-nowrap"
            >
              <div className="flex items-center gap-2 font-mono font-bold text-xs">
                <Moon size={14} className="text-primary" />
                <span>Zzz... dreaming of you...</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b-2 border-r-2 border-foreground rotate-45"></div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 bg-secondary border-2 border-foreground px-4 py-2 rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] z-20 whitespace-nowrap"
            >
              <div className="flex items-center gap-2 font-mono font-bold text-xs">
                <Sun size={14} className="text-foreground" />
                <span>
                  {isChasingTail ? "Wheee! My tail!" : isDancing ? "Happy Dance! ❤️" : "Woof! I love you!"}
                </span>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary border-b-2 border-r-2 border-foreground rotate-45"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Snoopy Container */}
        <div 
          onClick={toggleSleep}
          onMouseEnter={() => !isSleeping && !isChasingTail && !isDancing && setIsWagging(true)}
          onMouseLeave={() => setIsWagging(false)}
          className="cursor-pointer relative p-8"
        >
          {/* Snoopy "Body" */}
          <motion.div
            animate={isSleeping ? {
              scale: [1, 1.05, 1],
              rotate: [0, -2, 0]
            } : isChasingTail ? {
              rotate: [0, 360, 720, 1080],
              scale: [1, 0.9, 1, 0.9, 1]
            } : isDancing ? {
              y: [0, -30, 0, -30, 0],
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            } : {
              scale: isWagging ? [1, 1.1, 1] : 1,
              y: isWagging ? [0, -10, 0] : 0
            }}
            transition={isSleeping ? {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            } : isChasingTail ? {
              duration: 2,
              ease: "linear"
            } : isDancing ? {
              duration: 2,
              times: [0, 0.25, 0.5, 0.75, 1]
            } : {
              duration: 0.3,
              repeat: isWagging ? Infinity : 0
            }}
            className="relative"
          >
            <div className={`w-32 h-32 rounded-full border-[3px] border-foreground flex items-center justify-center transition-colors duration-500 ${isSleeping ? 'bg-muted' : 'bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)]'}`}>
              <motion.img
                src="https://pngimg.com/uploads/snoopy/snoopy_PNG42.png"
                alt="Snoopy"
                referrerPolicy="no-referrer"
                className={`w-24 h-24 object-contain transition-all duration-500 ${isSleeping ? 'grayscale opacity-50 rotate-12' : 'grayscale-0 opacity-100'}`}
                animate={isWagging ? {
                  rotate: [0, 5, 0, -5, 0],
                } : { rotate: 0 }}
                transition={isWagging ? { duration: 0.2, repeat: Infinity } : {}}
              />

              {/* Hearts when awake */}
              {!isSleeping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute -top-2 -right-2"
                >
                  <Heart size={20} className="text-primary fill-current animate-bounce" />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Click Hint */}
          <div className="mt-4 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity">
              {isSleeping ? "Click to wake Snoopy" : "Click to let him rest"}
            </span>
          </div>
        </div>
      </div>

      {/* Action Controls */}
      <AnimatePresence>
        {!isSleeping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex gap-4 mt-2"
          >
            <button
              onClick={triggerChase}
              disabled={isChasingTail || isDancing}
              className="px-3 py-1 bg-white border-2 border-foreground font-mono text-[10px] font-bold uppercase tracking-tighter shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all disabled:opacity-50"
            >
              Chase Tail
            </button>
            <button
              onClick={triggerDance}
              disabled={isChasingTail || isDancing}
              className="px-3 py-1 bg-primary text-white border-2 border-foreground font-mono text-[10px] font-bold uppercase tracking-tighter shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all disabled:opacity-50"
            >
              Happy Dance
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
