import ProductCard from "./ProductCard";
import painted1 from "@/assets/bottle-3.jpg.asset.json";
import painted2 from "@/assets/bottle-4.jpg.asset.json";
import painted3 from "@/assets/bottle-5.jpg.asset.json";
import snake from "@/assets/bottle-6.jpg.asset.json";
import jade from "@/assets/bottle-7.jpg.asset.json";
import snakeYellow from "@/assets/bottle-8.jpg.asset.json";
import mother from "@/assets/bottle-9.jpg.asset.json";
import collection from "@/assets/bottle-2.png.asset.json";

const products = [
  { name: "Simple Bottle Garden", price: 220, image: snake.url, category: "Simple Bottle", badge: "Bestseller" },
  { name: "Simple Bottle — Pack of 5", price: 1000, image: collection.url, category: "Value Pack", badge: "Save PKR 100" },
  { name: "Hand Painted Bottle", price: 320, image: painted1.url, category: "Painted Bottle" },
  { name: "Painted Bottles — Pack of 4", price: 1000, image: painted2.url, category: "Value Pack", badge: "Save PKR 280" },
  { name: "Snake Plant Bottle", price: 220, image: snakeYellow.url, category: "Snake Plant" },
  { name: "Jade Plant Bottle", price: 220, image: jade.url, category: "Jade Plant" },
  { name: "Money Plant Bottle", price: 220, image: painted3.url, category: "Money Plant" },
  { name: "Mother of Thousands Bottle", price: 220, image: mother.url, category: "Mother of Thousands" },
];

const ProductGrid = () => {
  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Our Collection</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Bottles &amp; Plants</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Snake plant, jade plant, money plant, pencil cactus and mother of thousands — rooted in clear or hand painted bottles.
          </p>
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
