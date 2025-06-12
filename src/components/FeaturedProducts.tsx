import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const products = [
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
      image: 'https://images.unsplash.com/photo-1605027990121-3b2c6c224ec9?w=400&h=400&fit=crop',
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
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked fresh produce from our trusted farmer partners. 
            Quality guaranteed, directly from farm to your table.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;