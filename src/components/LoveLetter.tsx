import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const messages = [
  "You make my heart do a happy dance, just like Snoopy!",
  "Two months down, a lifetime to go. I'm so lucky to have you.",
  "You're the Woodstock to my Snoopy – my lover and my everything.",
  "Every day with you is like a sunny day in the Peanuts world.",
  "I love you more than Snoopy loves his supper dish!",
  "Thank you for being the most wonderful part of my life.",
  "You're even cuter than a sleeping beagle.",
  "Happy 2nd monthsary, my love. Here's to many more!"
];

export default function LoveLetter() {
  const playBark = () => {
    const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
    audio.volume = 0.3;
    audio.play().catch(e => console.log("Audio play blocked", e));
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="micro-label">The Messages</div>
          <h2 className="font-heading italic text-4xl text-foreground mb-2">Cute Little Notes</h2>
          <p className="font-heading italic text-muted-foreground">Some reasons why I love you...</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              onViewportEnter={() => {
                // Play a subtle sound when the first few cards appear
                if (i < 2) playBark();
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div 
                className="comic-panel h-full min-h-[150px] cursor-pointer hover:bg-secondary/10 transition-colors"
                onClick={playBark}
              >
                <div className="flex items-start gap-4 w-full h-full">
                  <div className="text-primary shrink-0">
                    <Quote size={24} fill="currentColor" />
                  </div>
                  <p className="font-heading italic text-lg text-foreground leading-relaxed text-left">
                    {msg}
                  </p>
                </div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-secondary border-2 border-foreground rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
