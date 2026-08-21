interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category?: string;
  badge?: string;
}

const ProductCard = ({ name, price, image, category, badge }: ProductCardProps) => {
  const waLink = `https://wa.me/923484587680?text=${encodeURIComponent(
    `Hi! I'd like to order: ${name} — PKR ${price} 🌿`
  )}`;

  return (
    <article className="group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-up">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        {badge && (
          <span className="inline-block text-xs font-medium tracking-wide uppercase text-accent mb-2">
            {badge}
          </span>
        )}
        <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
        {category && (
          <p className="text-sm text-muted-foreground mt-1">{category}</p>
        )}
        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold text-foreground">PKR {price}</span>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
