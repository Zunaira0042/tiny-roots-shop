import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductGrid from "@/components/ProductGrid";
import WhatsAppOrder from "@/components/WhatsAppOrder";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductGrid />
        <WhatsAppOrder />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
