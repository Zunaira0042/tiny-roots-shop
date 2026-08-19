import { ShoppingCart, Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">Your Bottle Garden</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#shop" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Shop</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">About</a>
          <a href="#care" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Plant Care</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative text-foreground hover:text-primary transition-colors">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">0</span>
          </button>
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-up">
          <div className="flex flex-col gap-3">
            <a href="#shop" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-1">Shop</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-1">About</a>
            <a href="#care" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-1">Plant Care</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-1">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
