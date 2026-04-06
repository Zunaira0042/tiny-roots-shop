import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary-foreground/60" />
            <span className="font-display text-lg font-bold text-primary-foreground/80">Petit Jardin</span>
          </div>
          <div className="flex gap-6">
            <a href="#shop" className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors text-sm">Shop</a>
            <a href="#about" className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors text-sm">About</a>
            <a href="#care" className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors text-sm">Care</a>
            <a href="#contact" className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors text-sm">Contact</a>
          </div>
          <p className="text-primary-foreground/40 text-sm">© 2026 Petit Jardin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
