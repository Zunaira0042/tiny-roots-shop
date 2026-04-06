import heroImage from "@/assets/hero-plants.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Beautiful collection of miniature cacti and succulents" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative container mx-auto px-4 py-28 md:py-40 flex flex-col items-center text-center">
        <span className="text-primary-foreground/80 text-sm font-medium tracking-widest uppercase mb-4 animate-fade-up">🌵 Handpicked with love</span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Tiny Plants,<br />Big Happiness
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-lg mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Curated mini cacti, succulents & adorable pots to bring life to any desk, shelf or windowsill.
        </p>
        <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="lg" asChild>
            <a href="#shop">Shop Now</a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#about">Our Story</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
