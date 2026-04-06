import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
}

const ProductCard = ({ name, price, image, category, badge }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden animate-scale-in" style={{ boxShadow: "var(--card-shadow)" }}>
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
        <button className="absolute bottom-3 right-3 bg-primary text-primary-foreground p-2.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary/90">
          <ShoppingCart className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">
        <span className="text-muted-foreground text-xs uppercase tracking-wider">{category}</span>
        <h3 className="font-display font-semibold text-foreground mt-1">{name}</h3>
        <p className="text-primary font-bold mt-1">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
