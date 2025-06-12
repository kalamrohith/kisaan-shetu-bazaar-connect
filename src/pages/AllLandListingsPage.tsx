import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Droplets, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const AllLandListingsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const landListings = [
    {
      id: 'land-1',
      title: 'Premium Agricultural Land',
      size: '5 Acres',
      price: 50000,
      priceUnit: 'month',
      location: 'Pune, Maharashtra',
      soilType: 'Black Cotton Soil',
      waterSource: 'Borewell + Canal',
      electricity: true,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop',
      description: 'Fertile agricultural land perfect for vegetable cultivation. Well-connected with good road access.'
    },
    {
      id: 'land-2',
      title: 'Organic Farm Land',
      size: '3.5 Acres',
      price: 35000,
      priceUnit: 'month',
      location: 'Nashik, Maharashtra',
      soilType: 'Red Soil',
      waterSource: 'Drip Irrigation',
      electricity: true,
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop',
      description: 'Certified organic land with modern irrigation facilities. Ideal for organic farming.'
    },
    {
      id: 'land-3',
      title: 'Rice Paddy Fields',
      size: '8 Acres',
      price: 75000,
      priceUnit: 'month',
      location: 'Thanjavur, Tamil Nadu',
      soilType: 'Alluvial Soil',
      waterSource: 'River Water',
      electricity: true,
      image: 'https://images.unsplash.com/photo-1574263867128-3d94c83dd82d?w=400&h=400&fit=crop',
      description: 'Traditional rice paddy fields with consistent water supply from nearby river.'
    },
    {
      id: 'land-4',
      title: 'Fruit Orchard Land',
      size: '6 Acres',
      price: 60000,
      priceUnit: 'month',
      location: 'Shimoga, Karnataka',
      soilType: 'Laterite Soil',
      waterSource: 'Borewell',
      electricity: true,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',
      description: 'Perfect for mango and coconut cultivation. Established irrigation system.'
    },
    {
      id: 'land-5',
      title: 'Wheat Farm Land',
      size: '10 Acres',
      price: 80000,
      priceUnit: 'month',
      location: 'Ludhiana, Punjab',
      soilType: 'Alluvial Soil',
      waterSource: 'Tube Well',
      electricity: true,
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop',
      description: 'Large wheat cultivation land with modern farming equipment access.'
    },
    {
      id: 'land-6',
      title: 'Spice Plantation',
      size: '4 Acres',
      price: 45000,
      priceUnit: 'month',
      location: 'Munnar, Kerala',
      soilType: 'Hill Soil',
      waterSource: 'Natural Springs',
      electricity: false,
      image: 'https://images.unsplash.com/photo-1594736797933-d0b22f8e3df5?w=400&h=400&fit=crop',
      description: 'High altitude land perfect for cardamom and pepper cultivation.'
    },
    {
      id: 'land-7',
      title: 'Mixed Crop Land',
      size: '7 Acres',
      price: 55000,
      priceUnit: 'month',
      location: 'Mysore, Karnataka',
      soilType: 'Red Loamy Soil',
      waterSource: 'Rainwater Harvesting',
      electricity: true,
      image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400&h=400&fit=crop',
      description: 'Versatile land suitable for multiple crop varieties. Modern facilities available.'
    },
    {
      id: 'land-8',
      title: 'Dairy Farm Land',
      size: '12 Acres',
      price: 90000,
      priceUnit: 'month',
      location: 'Anand, Gujarat',
      soilType: 'Clayey Soil',
      waterSource: 'Government Canal',
      electricity: true,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop',
      description: 'Large land with existing dairy infrastructure and fodder cultivation area.'
    },
    {
      id: 'land-9',
      title: 'Vegetable Farm',
      size: '2.5 Acres',
      price: 30000,
      priceUnit: 'month',
      location: 'Ooty, Tamil Nadu',
      soilType: 'Mountain Soil',
      waterSource: 'Stream Water',
      electricity: true,
      image: 'https://images.unsplash.com/photo-1565847937-78bf28b38258?w=400&h=400&fit=crop',
      description: 'Cool climate land perfect for cabbage, carrot, and potato cultivation.'
    },
    {
      id: 'land-10',
      title: 'Sugarcane Fields',
      size: '15 Acres',
      price: 120000,
      priceUnit: 'month',
      location: 'Kolhapur, Maharashtra',
      soilType: 'Black Soil',
      waterSource: 'Canal Irrigation',
      electricity: true,
      image: 'https://images.unsplash.com/photo-1574263867128-3d94c83dd82d?w=400&h=400&fit=crop',
      description: 'Prime sugarcane cultivation land with established irrigation channels.'
    }
  ];

  const handleContactOwner = (land: typeof landListings[0]) => {
    toast({
      title: "Contact initiated",
      description: `We'll connect you with the owner of ${land.title}`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Header Section */}
        <section className="py-8 bg-gradient-to-r from-success/10 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="outline" size="sm" onClick={() => navigate('/')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </div>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                🌾 All Land Listings
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find the perfect agricultural land for your farming needs
              </p>
            </div>
          </div>
        </section>

        {/* Land Listings Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Available Agricultural Lands
              </h2>
              <p className="text-muted-foreground">
                {landListings.length} properties available for lease
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {landListings.map((land) => (
                <Card key={land.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-0">
                    {/* Land Image */}
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={land.image} 
                        alt={land.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-success text-success-foreground">
                          {land.size}
                        </Badge>
                      </div>
                    </div>

                    {/* Land Info */}
                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {land.title}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {land.location}
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div><span className="font-medium">Soil Type:</span> {land.soilType}</div>
                        <div className="flex items-center gap-1">
                          <Droplets className="h-3 w-3 text-blue-500" />
                          <span className="font-medium">Water:</span> {land.waterSource}
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className={`h-3 w-3 ${land.electricity ? 'text-yellow-500' : 'text-gray-400'}`} />
                          <span className="font-medium">Electricity:</span> 
                          {land.electricity ? ' Available' : ' Not Available'}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {land.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-primary">
                            ₹{land.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-muted-foreground">/{land.priceUnit}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 pt-0">
                    <Button 
                      className="w-full" 
                      onClick={() => handleContactOwner(land)}
                    >
                      Contact Owner
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AllLandListingsPage;