import ProductCard from "./ProductCard";
import productCactus1 from "@/assets/product-cactus-1.jpg";
import productSucculent1 from "@/assets/product-succulent-1.jpg";
import productMiniGarden from "@/assets/product-mini-garden.jpg";
import productCactus2 from "@/assets/product-cactus-2.jpg";
import productSucculent2 from "@/assets/product-succulent-2.jpg";
import productPots from "@/assets/product-pots.jpg";
import productFairyGarden from "@/assets/product-fairy-garden.jpg";

const products = [
  { name: "Pink Blush Cactus", price: 12.99, image: productCactus1, category: "Cacti", badge: "Bestseller" },
  { name: "Terra Succulent", price: 9.99, image: productSucculent1, category: "Succulents" },
  { name: "Mini Garden Bowl", price: 24.99, image: productMiniGarden, category: "Mini Gardens", badge: "New" },
  { name: "Geo Cactus Pot", price: 14.99, image: productCactus2, category: "Cacti" },
  { name: "Speckled Echeveria", price: 11.99, image: productSucculent2, category: "Succulents" },
  { name: "Pastel Pot Trio", price: 18.99, image: productPots, category: "Pots", badge: "Popular" },
  { name: "Fairy Garden Kit", price: 29.99, image: productFairyGarden, category: "Mini Gardens" },
];

const ProductGrid = () => {
  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Our Collection</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Little Greens, Big Charm</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">Each plant is carefully selected and potted with love. Perfect gifts or treats for yourself.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div key={product.name} style={{ animationDelay: `${i * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
