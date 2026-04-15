import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

const memories = [
  {
    title: "Our First Date",
    date: "Feb 15, 2026",
    image: "https://picsum.photos/seed/date1/600/400",
    caption: "The day it all started. I was so nervous!"
  },
  {
    title: "Coffee & Cuddles",
    date: "Mar 2, 2026",
    image: "https://picsum.photos/seed/coffee/600/400",
    caption: "Just us and our favorite drinks."
  },
  {
    title: "Stargazing",
    date: "Mar 20, 2026",
    image: "https://picsum.photos/seed/stars/600/400",
    caption: "The stars were beautiful, but you were brighter."
  },
  {
    title: "Park Picnic",
    date: "Apr 5, 2026",
    image: "https://picsum.photos/seed/picnic/600/400",
    caption: "Sandwiches and sunshine."
  }
];

export default function MemoryLane() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="micro-label">Our Journey</div>
          <h2 className="font-heading italic text-4xl text-foreground mb-2">Our Memory Lane</h2>
          <p className="font-heading italic text-muted-foreground">Looking back at our first two months...</p>
        </div>

        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {memories.map((memory, i) => (
              <CarouselItem key={i}>
                <motion.div 
                  className="p-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="comic-panel min-h-[300px] flex flex-col items-center justify-center">
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 border-2 border-foreground font-sans font-bold text-xs uppercase tracking-widest shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                      {memory.date}
                    </div>
                    
                    <div className="p-8 text-center w-full">
                      <div className="w-12 h-12 bg-secondary border-2 border-foreground mb-4 mx-auto flex items-center justify-center">
                        <Heart size={24} className="text-foreground" />
                      </div>
                      <h3 className="font-heading italic text-3xl text-foreground mb-4">{memory.title}</h3>
                      <p className="font-heading italic text-xl text-muted-foreground leading-relaxed">
                        "{memory.caption}"
                      </p>
                    </div>
                    
                    <div className="absolute bottom-4 left-4">
                      <div className="stamp">MEMORABLE</div>
                    </div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-secondary border-2 border-foreground rounded-full"></div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex border-[3px] border-foreground rounded-none" />
          <CarouselNext className="hidden md:flex border-[3px] border-foreground rounded-none" />
        </Carousel>
      </div>
    </section>
  );
}
