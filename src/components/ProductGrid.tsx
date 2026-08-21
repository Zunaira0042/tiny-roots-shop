import ProductCard from "./ProductCard";

import snake from "@/assets/beach-snake.png";
import jade from "@/assets/beach-jade.png";
import pencil from "@/assets/beach-pencil.png";
import aloe from "@/assets/beach-aloe.png";
import mother from "@/assets/beach-mother.png";
import pack4simple from "@/assets/beach-pack4simple.png";
import painted1 from "@/assets/beach-painted1.png";
import painted3 from "@/assets/beach-painted3.png";
import painted4 from "@/assets/beach-painted4.png";

const simpleBottles = [
  {
    name: "Snake Plant Bottle",
    price: 250,
    image: snake,
    category: "Simple Bottle",
    badge: "Bestseller",
  },
  {
    name: "Jade Plant Bottle",
    price: 250,
    image: jade,
    category: "Simple Bottle",
  },
  {
    name: "Pencil Cactus Bottle",
    price: 250,
    image: pencil,
    category: "Simple Bottle",
  },
  {
    name: "Aloe Vera Bottle",
    price: 250,
    image: aloe,
    category: "Simple Bottle",
  },
  {
    name: "Mother of Thousands Bottle",
    price: 250,
    image: mother,
    category: "Simple Bottle",
  },
  {
    name: "Simple Bottles — Pack of 4",
    price: 1000,
    image: pack4simple,
    category: "Value Pack",
    badge: "Pack of 4",
  },
];

const paintedBottles = [
  {
    name: "Hand Painted Bottle",
    price: 350,
    image: painted1,
    category: "Painted Bottle",
  },
  {
    name: "Hand Painted Bottles — Pack of 3",
    price: 1000,
    image: painted3,
    category: "Value Pack",
    badge: "Pack of 3",
  },
  {
    name: "Hand Painted Bottles — Pack of 4",
    price: 1200,
    image: painted4,
    category: "Value Pack",
    badge: "Pack of 4",
  },
];

const ProductGrid = () => {
  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            Our Collection
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Simple Bottles — PKR 250 each
          </h2>

          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Snake plant, jade plant, pencil cactus, aloe vera and mother of
            thousands — rooted in clear recycled bottles. Pack of 4 for PKR 1000.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {simpleBottles.map((product, i) => (
            <div
              key={product.name}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-20 mb-12">
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            Hand Painted
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Hand Painted Bottles
          </h2>

          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            PKR 350 each, 3 for PKR 1000 or 4 for PKR 1200.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paintedBottles.map((product, i) => (
            <div
              key={product.name}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;