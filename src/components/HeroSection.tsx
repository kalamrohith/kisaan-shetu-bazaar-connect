import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/30 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Fresh From Farm
                <span className="text-primary block">Directly to You</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Connect directly with local farmers. Get the freshest produce without middlemen. 
                Support your community while enjoying the best prices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => navigate('/products')}>
                Start Shopping
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => navigate('/farmer-dashboard')}>
                Become a Farmer
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Active Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Cities Served</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/30 p-8">
              <div className="w-full h-full rounded-xl bg-card border border-border flex items-center justify-center">
                <div className="text-center space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Farmers working on farm" 
                    className="w-24 h-24 mx-auto rounded-full object-cover"
                  />
                  <h3 className="text-xl font-semibold">Kisaan Sethu</h3>
                  <p className="text-muted-foreground">Directly from verified farmers</p>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🥕</span>
                <div>
                  <div className="font-semibold text-sm">Fresh Carrots</div>
                  <div className="text-primary font-bold">₹40/kg</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🍅</span>
                <div>
                  <div className="font-semibold text-sm">Organic Tomatoes</div>
                  <div className="text-primary font-bold">₹60/kg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;