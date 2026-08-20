import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary-foreground/60" />
            <span className="font-display text-lg font-bold text-primary-foreground/80">a plant lover</span>
          </div>
          <p className="text-primary-foreground/40 text-sm">© 2026 a plant lover</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
