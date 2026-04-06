import { Truck, Heart, Droplets } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $35" },
  { icon: Heart, title: "Gift Wrapped", desc: "Beautiful packaging included" },
  { icon: Droplets, title: "Care Guide", desc: "Tips included with every plant" },
];

const Features = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4 justify-center md:justify-start">
              <div className="bg-primary/10 p-3 rounded-full">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
