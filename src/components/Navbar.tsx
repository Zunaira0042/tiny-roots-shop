import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-center py-4 px-4">
        <a href="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">a plant lover</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
