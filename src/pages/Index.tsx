import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ProductCatalog from "@/components/ProductCatalog";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";

const Index = () => (
  <CartProvider>
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <ProductCatalog />
      <AboutSection />
      <Testimonials />
      <CartDrawer />
      <Footer />
    </div>
  </CartProvider>
);

export default Index;
