import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Love is being together even when you're just sitting on a doghouse under the stars.",
    author: "Snoopy"
  },
  {
    text: "A hug is the perfect gift... one size fits all, and I have a lifetime supply for my lover.",
    author: "Snoopy"
  },
  {
    text: "To the world you may be one person, but to me, you are the entire world.",
    author: "Snoopy"
  },
  {
    text: "Every day is a happy dance when I'm with the one I love.",
    author: "Snoopy"
  },
  {
    text: "In the book of life, the best chapters are the ones we write together.",
    author: "Snoopy"
  }
];

export default function SnoopyQuotes() {
  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="micro-label">Romance</div>
          <h2 className="font-heading italic text-4xl text-foreground">Snoopy's Love Philosophy</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="comic-panel p-8 bg-white relative group hover:-translate-y-1 transition-transform"
            >
              <Quote className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors" size={32} />
              <p className="font-heading italic text-xl text-foreground mb-4 leading-relaxed">
                "{quote.text}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-[2px] bg-primary"></div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  — {quote.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
