import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import SpecialOffersCarousel from '@/components/SpecialOffersCarousel';
import FeaturedProducts from '@/components/FeaturedProducts';
import OffersSection from '@/components/OffersSection';
import CustomerReviews from '@/components/CustomerReviews';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <SpecialOffersCarousel />
        <FeaturedProducts />
        <OffersSection />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
