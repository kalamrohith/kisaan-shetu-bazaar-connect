import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const ProductsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || '';
  const initialSearch = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const allProducts = [
    {
      id: '1',
      name: 'Organic Tomatoes',
      price: 60,
      unit: 'kg',
      image: '🍅',
      farmer: 'Rajesh Kumar',
      location: 'Maharashtra',
      category: 'Vegetables',
      isOrganic: true,
      discount: 15,
      rating: 4.5,
      reviewCount: 23,
    },
    {
      id: '2',
      name: 'Fresh Carrots',
      price: 40,
      unit: 'kg',
      image: '🥕',
      farmer: 'Priya Devi',
      location: 'Punjab',
      category: 'Vegetables',
      isOrganic: false,
      rating: 4.2,
      reviewCount: 18,
    },
    {
      id: '3',
      name: 'Premium Apples',
      price: 150,
      unit: 'kg',
      image: '🍎',
      farmer: 'Suresh Sharma',
      location: 'Himachal Pradesh',
      category: 'Fruits',
      isOrganic: true,
      discount: 20,
      rating: 4.8,
      reviewCount: 45,
    },
    {
      id: '4',
      name: 'Basmati Rice',
      price: 120,
      unit: 'kg',
      image: '🌾',
      farmer: 'Vikram Singh',
      location: 'Punjab',
      category: 'Grains',
      isOrganic: false,
      rating: 4.3,
      reviewCount: 67,
    },
    {
      id: '5',
      name: 'Organic Spinach',
      price: 35,
      unit: 'kg',
      image: '🥬',
      farmer: 'Sunita Patel',
      location: 'Gujarat',
      category: 'Vegetables',
      isOrganic: true,
      rating: 4.6,
      reviewCount: 29,
    },
    {
      id: '6',
      name: 'Fresh Mangoes',
      price: 200,
      unit: 'dozen',
      image: '🥭',
      farmer: 'Ramesh Yadav',
      location: 'Karnataka',
      category: 'Fruits',
      isOrganic: false,
      discount: 10,
      rating: 4.7,
      reviewCount: 52,
    },
    {
      id: '7',
      name: 'Red Chili Powder',
      price: 280,
      unit: 'kg',
      image: '🌶️',
      farmer: 'Lakshmi Reddy',
      location: 'Andhra Pradesh',
      category: 'Spices',
      isOrganic: true,
      rating: 4.4,
      reviewCount: 31,
    },
    {
      id: '8',
      name: 'Fresh Milk',
      price: 55,
      unit: 'liter',
      image: '🥛',
      farmer: 'Govind Mehta',
      location: 'Rajasthan',
      category: 'Dairy',
      isOrganic: false,
      rating: 4.1,
      reviewCount: 89,
      reviews: [
        {
          id: '1',
          userName: 'Anjali Sharma',
          rating: 4.7,
          comment: 'Amazing quality honey! Very pure and tasty.',
          date: '2024-06-10',
          verified: true
        }
      ]
    },
  ];

  const categories = ['All', 'Vegetables', 'Fruits', 'Grains', 'Spices', 'Dairy', 'Others'];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.farmer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' || 
                           product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Search and Filter Section */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Search for products, farmers, or locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category || (category === 'All' && selectedCategory === '') ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {selectedCategory ? `${selectedCategory} Products` : 'All Products'}
              </h1>
              <p className="text-muted-foreground">
                {filteredProducts.length} products found
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or category filters
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;