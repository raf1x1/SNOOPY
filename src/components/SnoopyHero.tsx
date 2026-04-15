import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function SnoopyHero() {
  return (
    <div className="relative flex flex-col items-center justify-center py-20 px-4 overflow-hidden min-h-[60vh]">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10"
      >
        <div className="inline-block p-1 px-4 bg-secondary border-2 border-foreground mb-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <span className="font-sans font-bold text-sm uppercase tracking-widest text-foreground">Happy 2nd Monthsary! 🐾</span>
        </div>
        
        <h1 className="font-heading italic text-6xl md:text-8xl text-foreground mb-4 tracking-tight">
          To My <span className="text-primary">Favorite</span> Human
        </h1>
        
        <p className="font-heading italic text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Two months of laughter, late-night calls, and endless joy. Even with the distance, just like Snoopy and Woodstock, we're better together!
        </p>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "110%", 
              opacity: 0 
            }}
            animate={{ 
              y: "-10%", 
              opacity: [0, 0.2, 0] 
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute text-primary/20"
          >
            <Heart size={20 + Math.random() * 20} fill="currentColor" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
