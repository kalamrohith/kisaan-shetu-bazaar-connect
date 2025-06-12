import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AllOffersPage = () => {
  const navigate = useNavigate();

  const discountedProducts = [
    {
      id: 'offer-1',
      name: 'Premium Organic Bundle',
      price: 350,
      originalPrice: 500,
      unit: 'bundle',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop',
      farmer: 'Multiple Farmers',
      location: 'Various',
      category: 'Bundle',
      isOrganic: true,
      discount: 30,
      rating: 4.8,
      reviewCount: 45,
      reviews: []
    },
    {
      id: 'offer-2',
      name: 'Fresh Fruit Basket',
      price: 600,
      originalPrice: 800,
      unit: 'basket',
      image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=400&fit=crop',
      farmer: 'Orchard Farmers',
      location: 'Kashmir',
      category: 'Fruits',
      isOrganic: true,
      discount: 25,
      rating: 4.7,
      reviewCount: 32,
      reviews: []
    },
    {
      id: 'offer-3',
      name: 'Spice Master Collection',
      price: 280,
      originalPrice: 400,
      unit: 'set',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop',
      farmer: 'Spice Growers',
      location: 'Kerala',
      category: 'Spices',
      isOrganic: true,
      discount: 30,
      rating: 4.6,
      reviewCount: 28,
      reviews: []
    },
    {
      id: 'offer-4',
      name: 'Grain Variety Pack',
      price: 450,
      originalPrice: 600,
      unit: 'pack',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
      farmer: 'Grain Farmers',
      location: 'Punjab',
      category: 'Grains',
      isOrganic: false,
      discount: 25,
      rating: 4.5,
      reviewCount: 38,
      reviews: []
    },
    {
      id: 'offer-5',
      name: 'Dairy Fresh Combo',
      price: 240,
      originalPrice: 300,
      unit: 'combo',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop',
      farmer: 'Dairy Farmers',
      location: 'Gujarat',
      category: 'Dairy',
      isOrganic: false,
      discount: 20,
      rating: 4.3,
      reviewCount: 22,
      reviews: []
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Header Section */}
        <section className="py-8 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="outline" size="sm" onClick={() => navigate('/')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </div>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                🔥 All Special Offers
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Limited time deals on premium farm products. Save big on quality produce!
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Special Discounted Products
              </h2>
              <p className="text-muted-foreground">
                {discountedProducts.length} offers available
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {discountedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AllOffersPage;