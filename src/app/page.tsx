import { AttractionsCarousel } from "./components/attractions-section";
import { HeroSection } from "./components/hero-section";
import { LocationSection } from "./components/location";
import { ProductCarousel } from "./components/products-section";

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <main className="container mx-auto px-4 lg:px-0">
        <ProductCarousel />
        <AttractionsCarousel />
        <LocationSection />
      </main>
    </main>
  );
}
