import ProductCard from "./ProductCard";
import painted1 from "@/assets/bottle-3.jpg.asset.json";
import paintedPair from "@/assets/painted-pair.jpg.asset.json";
import snake from "@/assets/bottle-6.jpg.asset.json";
import jade from "@/assets/bottle-7.jpg.asset.json";
import snakeYellow from "@/assets/bottle-8.jpg.asset.json";
import mother from "@/assets/mother-thousands.jpg.asset.json";
import pencil from "@/assets/pencil-cactus.jpg.asset.json";
import aloe from "@/assets/aloe.jpg.asset.json";
import collection from "@/assets/bottle-2.png.asset.json";

const simpleBottles = [
  { name: "Snake Plant Bottle", price: 220, image: snake.url, category: "Simple Bottle", badge: "Bestseller" },
  { name: "Jade Plant Bottle", price: 220, image: jade.url, category: "Simple Bottle" },
  { name: "Snake Plant (Variegated) Bottle", price: 220, image: snakeYellow.url, category: "Simple Bottle" },
  { name: "Pencil Cactus Bottle", price: 220, image: pencil.url, category: "Simple Bottle", badge: "New" },
  { name: "Aloe Vera Bottle", price: 220, image: aloe.url, category: "Simple Bottle", badge: "New" },
  { name: "Mother of Thousands Bottle", price: 220, image: mother.url, category: "Simple Bottle" },
];

const packsAndPainted = [
  { name: "Simple Bottles — Pack of 5", price: 1000, image: collection.url, category: "Value Pack", badge: "Save PKR 100" },
  { name: "Hand Painted Bottle", price: 320, image: painted1.url, category: "Painted Bottle" },
  { name: "Hand Painted Bottles — Pack of 4", price: 1000, image: paintedPair.url, category: "Value Pack", badge: "Save PKR 280" },
];

const ProductGrid = () => {
  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Our Collection</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Simple Bottles — PKR 220 each</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Snake plant, jade plant, money plant, pencil cactus, aloe vera and mother of thousands — rooted in clear recycled bottles.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {simpleBottles.map((product, i) => (
            <div key={product.name} style={{ animationDelay: `${i * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-20 mb-12">
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Packs &amp; Hand Painted</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Sets &amp; Painted Bottles</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Pack of 5 simple bottles for PKR 1000, hand painted bottles PKR 320 each or 4 for PKR 1000.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packsAndPainted.map((product, i) => (
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
