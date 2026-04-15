/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Music, Sparkles, PawPrint } from "lucide-react";
import SnoopyHero from "./components/SnoopyHero";
import InteractiveSnoopy from "./components/InteractiveSnoopy";
import LoveLetter from "./components/LoveLetter";
import SnoopyQuotes from "./components/SnoopyQuotes";
import WoodstockGallery from "./components/WoodstockGallery";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

export default function App() {
  const [timeTogether, setTimeTogether] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showSurprise, setShowSurprise] = useState(false);

  const playBark = () => {
    const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
    audio.volume = 0.5;
    audio.play().catch(e => console.log("Audio play blocked", e));
  };

  const playJingle = () => {
    const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3");
    audio.volume = 0.4;
    audio.play().catch(e => console.log("Audio play blocked", e));
  };

  useEffect(() => {
    const startDate = new Date("2026-02-16T00:00:00");
    
    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      
      setTimeTogether({ days, hours, minutes, seconds });
    };

    updateCounter();
    const timer = setInterval(updateCounter, 1000);

    // Initial confetti + jingle
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
    
    const confettiInterval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(confettiInterval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => {
      clearInterval(timer);
      clearInterval(confettiInterval);
    };
  }, []);

  const handleCelebrate = () => {
    playJingle();
    playBark();
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E63946', '#FFCE00', '#FFFFFF', '#1A1A1A']
    });
    setShowSurprise(true);
    toast.success("Happy 2nd Monthsary, Coco! ❤️", {
      description: "I love you always!",
      duration: 5000,
    });
    setTimeout(() => setShowSurprise(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary selection:text-foreground">
      <Toaster position="top-center" richColors />
      {/* Navigation / Header */}
      <header className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-background/80 backdrop-blur-sm border-b-[3px] border-foreground">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-foreground rounded-none flex items-center justify-center text-white border-2 border-foreground shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
            <PawPrint size={20} />
          </div>
          <span className="font-heading italic text-xl tracking-tight font-bold">Snoopy & You</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-secondary px-4 py-1.5 border-2 border-foreground shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <Sparkles size={16} className="text-foreground" />
            <span className="text-xs font-bold uppercase tracking-widest">
              {timeTogether.days}d {timeTogether.hours}h {timeTogether.minutes}m {timeTogether.seconds}s of Love
            </span>
          </div>
          <Button 
            onClick={() => { playBark(); toast("Woof! 🐾"); }}
            variant="outline" 
            size="icon" 
            className="rounded-none border-[3px] border-foreground hover:bg-secondary transition-colors shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <Music size={18} />
          </Button>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <SnoopyHero />

        {/* Interactive Snoopy */}
        <InteractiveSnoopy />

        {/* Personal Message Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="comic-panel !p-12 bg-white"
            >
              <div className="stamp">MESSAGE FOR COCO</div>
              <div className="w-16 h-1 bg-primary mb-8 mx-auto"></div>
              
              <h2 className="font-heading italic text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                Happy 2nd Monthsary, Coco!
              </h2>
              
              <div className="space-y-6 font-heading italic text-xl md:text-2xl text-muted-foreground leading-relaxed">
                <p>
                  I may be a little silly and simple, but I love you in the sweetest and purest way. ☁️
                </p>
                <p>
                  Ikaw yung favorite ko everyday parang si Charlie Brown kay Snoopy hehe.
                </p>
                <p className="text-primary font-bold text-3xl mt-12">
                  I love you always, Coco.
                </p>
              </div>
              
              <div className="mt-12 flex justify-center gap-4">
                <Heart className="text-primary fill-current" size={32} />
                <PawPrint className="text-foreground" size={32} />
                <Heart className="text-primary fill-current" size={32} />
              </div>
              
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-secondary border-2 border-foreground rounded-full"></div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="comic-panel">
              <div className="micro-label">Time Together</div>
              <div className="text-2xl font-heading italic text-primary mb-2">
                {timeTogether.days}d {timeTogether.hours}h {timeTogether.minutes}m {timeTogether.seconds}s
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold">Every second counts</div>
            </div>
            <div className="comic-panel">
              <div className="micro-label">Joy</div>
              <div className="text-4xl font-heading italic text-secondary mb-2">∞</div>
              <div className="text-[10px] uppercase tracking-widest font-bold">Laughter Shared</div>
            </div>
            <div className="comic-panel">
              <div className="micro-label">Magic</div>
              <div className="text-4xl font-heading italic text-primary mb-2">2</div>
              <div className="text-[10px] uppercase tracking-widest font-bold">Months of Magic</div>
            </div>
          </div>
        </section>

        {/* Love Letters */}
        <LoveLetter />

        {/* Snoopy Quotes & Woodstock Gallery */}
        <SnoopyQuotes />
        <WoodstockGallery />

        {/* Final CTA / Surprise */}
        <section className="py-24 px-4 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="micro-label">Final Note</div>
            <h2 className="font-heading italic text-5xl text-foreground mb-6">Ready for a Surprise?</h2>
            <p className="font-heading italic text-lg text-muted-foreground mb-10">
              Click the button below to see how much I love you!
            </p>
            
            <div className="relative inline-block">
              <Button 
                onClick={handleCelebrate}
                size="lg"
                className="h-16 px-10 rounded-none bg-primary hover:bg-primary/90 text-white font-heading italic text-2xl border-[3px] border-foreground shadow-[8px_8px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                Press Me! <Heart className="ml-2 fill-current" />
              </Button>

              <AnimatePresence>
                {showSurprise && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.5 }}
                    animate={{ opacity: 1, y: -100, scale: 1.5 }}
                    exit={{ opacity: 0, scale: 2 }}
                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                  >
                    <div className="comic-panel whitespace-nowrap">
                      <span className="font-heading italic text-2xl text-primary">I LOVE YOU SO MUCH! ❤️</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Floating Woodstock-like dots */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, Math.random() * 40 - 20, 0],
                  y: [0, Math.random() * 40 - 20, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-3 h-3 bg-secondary border-2 border-foreground"
                style={{
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                }}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-[3px] border-foreground bg-white/30 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4 text-foreground/40">
            <Heart size={20} />
            <PawPrint size={20} />
            <Sparkles size={20} />
          </div>
          <p className="font-heading italic text-lg text-foreground/60">
            Made with love for our 2nd Monthsary
          </p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-[3px] font-bold">
            © 2026 Snoopy & Woodstock Productions by ryry
          </p>
        </div>
      </footer>
    </div>
  );
}
