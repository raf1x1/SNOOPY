import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

const woodstockTraits = [
  {
    title: "Lover",
    desc: "Always by Snoopy's side, just like I'll always be by yours as your lover.",
    icon: <Heart size={20} className="text-primary" />
  },
  {
    title: "Happy Spirit",
    desc: "Finding joy in the little things, especially when we're together.",
    icon: <Sparkles size={20} className="text-secondary" />
  },
  {
    title: "Unique Voice",
    desc: "Even if the world doesn't understand us, we understand each other perfectly.",
    icon: <Heart size={20} className="text-primary" />
  }
];

export default function WoodstockGallery() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="comic-panel bg-secondary/10 p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles size={120} />
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="micro-label">The Perfect Pair</div>
              <h2 className="font-heading italic text-4xl text-foreground mb-4">Snoopy & Woodstock Energy</h2>
              <p className="font-heading italic text-muted-foreground max-w-lg mx-auto">
                Just like them, we're a team that makes every day an adventure as lovers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {woodstockTraits.map((trait, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white border-[3px] border-foreground p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center"
                >
                  <div className="mb-4 p-3 bg-muted rounded-full border-2 border-foreground">
                    {trait.icon}
                  </div>
                  <h3 className="font-heading italic text-xl mb-2">{trait.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {trait.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block comic-panel bg-white px-8 py-4">
                <p className="font-heading italic text-lg">
                  "I may be small, but my love for you is giant!" ☁️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
