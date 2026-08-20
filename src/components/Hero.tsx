import heroAsset from "@/assets/bottle-1.png.asset.json";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroAsset.url}
          alt="Bottle garden wall with snake plants, jade and money plants growing in glass bottles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative container mx-auto px-4 py-28 md:py-40 flex flex-col items-center text-center">
        <span className="text-primary-foreground/80 text-sm font-medium tracking-widest uppercase mb-4 animate-fade-up">🌿 Handmade in Pakistan</span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Your Bottle Garden
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-lg mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Recycled glass bottles turned into living décor — snake plant, jade, money plant, pencil cactus and more, rooted in water.
        </p>
        <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="lg" asChild>
            <a href="#shop">See Bottles</a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a
              href="https://wa.me/923484587680?text=Hi!%20I'd%20like%20to%20order%20a%20bottle%20garden%20%F0%9F%8C%BF"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
