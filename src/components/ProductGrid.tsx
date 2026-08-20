import ProductCard from "./ProductCard";

const simpleBottles = [
  {
    name: "Snake Plant Bottle",
    price: 250,
    image: "/tiny-roots-shop/images/beach-snake.png",
    category: "Simple Bottle",
    badge: "Bestseller",
  },
  {
    name: "Jade Plant Bottle",
    price: 250,
    image: "/tiny-roots-shop/images/beach-jade.png",
    category: "Simple Bottle",
  },
  {
    name: "Pencil Cactus Bottle",
    price: 250,
    image: "/tiny-roots-shop/images/beach-pencil.png",
    category: "Simple Bottle",
  },
  {
    name: "Aloe Vera Bottle",
    price: 250,
    image: "/tiny-roots-shop/images/beach-aloe.png",
    category: "Simple Bottle",
  },
  {
    name: "Mother of Thousands Bottle",
    price: 250,
    image: "/tiny-roots-shop/images/beach-mother.png",
    category: "Simple Bottle",
  },
  {
    name: "Simple Bottles — Pack of 4",
    price: 1000,
    image: "/tiny-roots-shop/images/beach-pack4simple.png",
    category: "Value Pack",
    badge: "Pack of 4",
  },
];

const paintedBottles = [
  {
    name: "Hand Painted Bottle",
    price: 350,
    image: "/tiny-roots-shop/images/beach-painted1.png",
    category: "Painted Bottle",
  },
  {
    name: "Hand Painted Bottles — Pack of 3",
    price: 1000,
    image: "/tiny-roots-shop/images/beach-painted3.png",
    category: "Value Pack",
    badge: "Pack of 3",
  },
  {
    name: "Hand Painted Bottles — Pack of 4",
    price: 1200,
    image: "/tiny-roots-shop/images/beach-painted4.png",
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
            thousands — rooted in clear recycled bottles. Pack of 4 for PKR
            1000.
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