import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const CategoriesSection = () => {
  const navigate = useNavigate();
  
  const categories = [
    { name: 'Vegetables', icon: '🥬', count: '250+ products', color: 'from-success/20 to-primary/20' },
    { name: 'Fruits', icon: '🍎', count: '180+ products', color: 'from-destructive/20 to-harvest/20' },
    { name: 'Grains', icon: '🌾', count: '120+ products', color: 'from-harvest/20 to-accent/20' },
    { name: 'Spices', icon: '🌶️', count: '80+ products', color: 'from-earth/20 to-destructive/20' },
    { name: 'Dairy', icon: '🥛', count: '60+ products', color: 'from-secondary/20 to-accent/20' },
    { name: 'Others', icon: '🥜', count: '90+ products', color: 'from-muted/20 to-primary/20' },
  ];

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/products?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover fresh produce organized by categories. From organic vegetables to exotic fruits, 
            find everything you need from local farmers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card 
              key={category.name} 
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleCategoryClick(category.name)}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;