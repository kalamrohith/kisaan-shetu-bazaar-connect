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
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop',
      farmer: 'Rajesh Kumar',
      location: 'Maharashtra',
      category: 'Vegetables',
      isOrganic: true,
      discount: 15,
      rating: 4.5,
      reviewCount: 23,
      reviews: [
        {
          id: '1',
          userName: 'Priya Singh',
          rating: 4.5,
          comment: 'Fresh and juicy tomatoes! Perfect for cooking.',
          date: '2024-06-10',
          verified: true
        },
        {
          id: '2',
          userName: 'Amit Kumar',
          rating: 4.0,
          comment: 'Good quality organic tomatoes, worth the price.',
          date: '2024-06-08',
          verified: false
        }
      ]
    },
    {
      id: '2',
      name: 'Fresh Potatoes',
      price: 35,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop',
      farmer: 'Priya Devi',
      location: 'Punjab',
      category: 'Vegetables',
      isOrganic: false,
      rating: 4.2,
      reviewCount: 18,
      reviews: [
        {
          id: '1',
          userName: 'Ravi Sharma',
          rating: 4.2,
          comment: 'Good quality potatoes, fresh from farm.',
          date: '2024-06-09',
          verified: true
        }
      ]
    },
    {
      id: '3',
      name: 'Red Onions',
      price: 45,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&h=400&fit=crop',
      farmer: 'Deepak Patel',
      location: 'Gujarat',
      category: 'Vegetables',
      isOrganic: false,
      rating: 4.0,
      reviewCount: 24,
      reviews: [
        {
          id: '1',
          userName: 'Sunita Devi',
          rating: 4.0,
          comment: 'Fresh onions with good shelf life.',
          date: '2024-06-07',
          verified: true
        }
      ]
    },
    {
      id: '4',
      name: 'Bottle Gourd',
      price: 30,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=400&fit=crop',
      farmer: 'Kiran Reddy',
      location: 'Telangana',
      category: 'Vegetables',
      isOrganic: true,
      rating: 4.3,
      reviewCount: 15,
      reviews: [
        {
          id: '1',
          userName: 'Meera Joshi',
          rating: 4.3,
          comment: 'Fresh bottle gourd, perfect for curry.',
          date: '2024-06-06',
          verified: true
        }
      ]
    },
    {
      id: '5',
      name: 'Fresh Brinjal',
      price: 50,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=400&h=400&fit=crop',
      farmer: 'Sunita Patel',
      location: 'Gujarat',
      category: 'Vegetables',
      isOrganic: true,
      rating: 4.6,
      reviewCount: 29,
      reviews: [
        {
          id: '1',
          userName: 'Rohit Kumar',
          rating: 4.6,
          comment: 'Excellent quality brinjal, very fresh.',
          date: '2024-06-05',
          verified: true
        }
      ]
    },
    {
      id: '6',
      name: 'Fresh Carrots',
      price: 40,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop',
      farmer: 'Vikram Singh',
      location: 'Punjab',
      category: 'Vegetables',
      isOrganic: false,
      rating: 4.4,
      reviewCount: 32,
      reviews: [
        {
          id: '1',
          userName: 'Nisha Gupta',
          rating: 4.4,
          comment: 'Sweet and crunchy carrots, kids love them!',
          date: '2024-06-04',
          verified: true
        }
      ]
    },
    {
      id: '7',
      name: 'Premium Apples',
      price: 150,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop',
      farmer: 'Suresh Sharma',
      location: 'Himachal Pradesh',
      category: 'Fruits',
      isOrganic: true,
      discount: 20,
      rating: 4.8,
      reviewCount: 45,
      reviews: [
        {
          id: '1',
          userName: 'Anjali Verma',
          rating: 4.8,
          comment: 'Best quality apples! Sweet and crispy.',
          date: '2024-06-03',
          verified: true
        }
      ]
    },
    {
      id: '8',
      name: 'Fresh Mangoes',
      price: 200,
      unit: 'dozen',
      image: 'https://images.unsplash.com/photo-1553279719-d693b0374cf1?w=400&h=400&fit=crop',
      farmer: 'Ramesh Yadav',
      location: 'Karnataka',
      category: 'Fruits',
      isOrganic: false,
      discount: 10,
      rating: 4.7,
      reviewCount: 52,
      reviews: [
        {
          id: '1',
          userName: 'Kavya Iyer',
          rating: 4.7,
          comment: 'Delicious mangoes, perfect ripeness!',
          date: '2024-06-02',
          verified: true
        }
      ]
    },
    {
      id: '9',
      name: 'Basmati Rice',
      price: 120,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
      farmer: 'Harpreet Singh',
      location: 'Punjab',
      category: 'Grains',
      isOrganic: false,
      rating: 4.3,
      reviewCount: 67,
      reviews: [
        {
          id: '1',
          userName: 'Rekha Sharma',
          rating: 4.3,
          comment: 'Aromatic basmati rice, good quality.',
          date: '2024-06-01',
          verified: true
        }
      ]
    },
    {
      id: '10',
      name: 'Red Chili Powder',
      price: 280,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1583618528107-adf69bef819b?w=400&h=400&fit=crop',
      farmer: 'Lakshmi Reddy',
      location: 'Andhra Pradesh',
      category: 'Spices',
      isOrganic: true,
      rating: 4.4,
      reviewCount: 31,
      reviews: [
        {
          id: '1',
          userName: 'Sita Devi',
          rating: 4.4,
          comment: 'Perfect spice level, authentic taste.',
          date: '2024-05-31',
          verified: true
        }
      ]
    },
    {
      id: '11',
      name: 'Fresh Milk',
      price: 55,
      unit: 'liter',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop',
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
          rating: 4.1,
          comment: 'Fresh and pure milk, delivered daily.',
          date: '2024-05-30',
          verified: true
        }
      ]
    },
    {
      id: '12',
      name: 'Pure Honey',
      price: 450,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
      farmer: 'Arjun Patel',
      location: 'Gujarat',
      category: 'Others',
      isOrganic: true,
      rating: 4.5,
      reviewCount: 34,
      reviews: [
        {
          id: '1',
          userName: 'Maya Singh',
          rating: 4.5,
          comment: 'Pure and natural honey, great taste!',
          date: '2024-05-29',
          verified: true
        }
      ]
    },
    {
      id: '13',
      name: 'Mixed Nuts',
      price: 800,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=400&fit=crop',
      farmer: 'Deepa Rao',
      location: 'Kerala',
      category: 'Others',
      isOrganic: true,
      discount: 12,
      rating: 4.6,
      reviewCount: 28,
      reviews: [
        {
          id: '1',
          userName: 'Rajesh Kumar',
          rating: 4.6,
          comment: 'Fresh mixed nuts, great for snacking.',
          date: '2024-05-28',
          verified: true
        }
      ]
    },
  ];

  const categories = ['All', 'Vegetables', 'Fruits', 'Grains', 'Spices', 'Dairy', 'Others'];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.farmer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
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