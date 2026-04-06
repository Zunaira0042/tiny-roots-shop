import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">Stay in Bloom 🌿</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">Get plant care tips, new arrivals & exclusive offers straight to your inbox.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="your@email.com" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" />
          <Button variant="secondary" size="lg" type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
