import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "923484587680";
const MESSAGE = encodeURIComponent("Hi! I'd like to order from Your Bottle Garden 🌿");

const WhatsAppOrder = () => {
  return (
    <section id="order" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Order on WhatsApp</h2>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">
          Tell us which bottles you want and we'll confirm your order and delivery right away.
        </p>
        <Button size="lg" className="mt-8" asChild>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Order on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default WhatsAppOrder;
