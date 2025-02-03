import CustomDesignService from "./components/components-home-page/CustomDesignService";
import FeaturedCollections from "./components/components-home-page/FeaturedCollections";
import HeroSection from "./components/components-home-page/HeroSection";
import ProductCategories from "./components/components-home-page/NewArrival";
import StoreLocation from "./components/components-home-page/StoreLocations";

export default function Home() {
  return (
<div>
  <main>
    <HeroSection/>
    <FeaturedCollections/>
    <ProductCategories/>
    <CustomDesignService/>
    <StoreLocation/>
  </main>
</div>
  );
}
