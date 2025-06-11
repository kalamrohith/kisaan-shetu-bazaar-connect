import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Droplets, Eye, Search, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LandListing {
  id: string;
  title: string;
  area: number;
  areaUnit: string;
  rentPrice: number;
  rentPeriod: string;
  location: string;
  soilType: string;
  waterFacilities: string[];
  images: string[];
  farmerName: string;
  farmerContact: string;
  description: string;
}

const LandForLeaseHome = () => {
  const { toast } = useToast();
  const [searchLocation, setSearchLocation] = useState('');
  const [soilFilter, setSoilFilter] = useState('');
  const [selectedLand, setSelectedLand] = useState<LandListing | null>(null);

  // Mock land listings
  const landListings: LandListing[] = [
    {
      id: '1',
      title: 'Premium Agricultural Land - Perfect for Organic Farming',
      area: 5,
      areaUnit: 'acres',
      rentPrice: 25000,
      rentPeriod: 'year',
      location: 'Pune, Maharashtra',
      soilType: 'Black Soil',
      waterFacilities: ['Borewell', 'Drip Irrigation'],
      images: ['🌾', '🚜'],
      farmerName: 'Rajesh Kumar',
      farmerContact: '+91 9876543210',
      description: 'Fertile black soil land with excellent water facilities and road connectivity.'
    },
    {
      id: '2',
      title: 'Fertile Valley Land with Canal Water Supply',
      area: 3.5,
      areaUnit: 'acres',
      rentPrice: 18000,
      rentPeriod: 'year',
      location: 'Nashik, Maharashtra',
      soilType: 'Loamy Soil',
      waterFacilities: ['Canal Water', 'Natural Drainage'],
      images: ['🌱', '💧'],
      farmerName: 'Priya Devi',
      farmerContact: '+91 9876543211',
      description: 'Well-maintained land with natural water supply and good drainage system.'
    },
    {
      id: '3',
      title: 'Highland Farm - Ideal for Cash Crops',
      area: 8,
      areaUnit: 'acres',
      rentPrice: 35000,
      rentPeriod: 'year',
      location: 'Sangli, Maharashtra',
      soilType: 'Red Soil',
      waterFacilities: ['Borewell', 'Sprinkler System'],
      images: ['🌽', '🌻'],
      farmerName: 'Suresh Patil',
      farmerContact: '+91 9876543212',
      description: 'Large highland farm perfect for sugarcane and cotton cultivation.'
    }
  ];

  const filteredLands = landListings.filter(land => {
    const matchesLocation = !searchLocation || land.location.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesSoil = !soilFilter || soilFilter === 'all' || land.soilType === soilFilter;
    return matchesLocation && matchesSoil;
  });

  const handleContactFarmer = (farmer: string, contact: string) => {
    toast({
      title: "Contact Information",
      description: `Contact ${farmer} at ${contact}`,
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🌾 Land for Lease
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover premium agricultural lands available for lease. Perfect for farming, organic cultivation, and agribusiness ventures.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search by location..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={soilFilter} onValueChange={setSoilFilter}>
            <SelectTrigger className="md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Soil Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Soil Types</SelectItem>
              <SelectItem value="Black Soil">Black Soil</SelectItem>
              <SelectItem value="Red Soil">Red Soil</SelectItem>
              <SelectItem value="Loamy Soil">Loamy Soil</SelectItem>
              <SelectItem value="Sandy Soil">Sandy Soil</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Land Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLands.map((land) => (
            <Card key={land.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                {/* Land Image */}
                <div className="relative aspect-video overflow-hidden rounded-t-lg bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="flex space-x-2">
                      {land.images.map((emoji, index) => (
                        <span key={index} className="text-6xl">{emoji}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-success text-success-foreground">
                      {land.area} {land.areaUnit}
                    </Badge>
                  </div>

                  <div className="absolute top-2 right-2">
                    <Badge variant="outline" className="bg-card/80 backdrop-blur-sm">
                      {land.soilType}
                    </Badge>
                  </div>
                </div>

                {/* Land Info */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {land.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {land.location}
                    </div>
                  </div>

                  {/* Water Facilities */}
                  <div className="flex items-center text-sm">
                    <Droplets className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-muted-foreground">
                      {land.waterFacilities.join(', ')}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">
                        ₹{land.rentPrice.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground">/{land.rentPeriod}</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              <div className="p-4 pt-0">
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="flex-1" 
                        onClick={() => setSelectedLand(land)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{land.title}</DialogTitle>
                        <DialogDescription>
                          Detailed information about this agricultural land
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold">Area</h4>
                            <p>{land.area} {land.areaUnit}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Rent</h4>
                            <p>₹{land.rentPrice.toLocaleString()}/{land.rentPeriod}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Location</h4>
                            <p>{land.location}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Soil Type</h4>
                            <p>{land.soilType}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Water Facilities</h4>
                          <div className="flex flex-wrap gap-2">
                            {land.waterFacilities.map((facility, index) => (
                              <Badge key={index} variant="outline">{facility}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold">Description</h4>
                          <p className="text-muted-foreground">{land.description}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold">Owner Contact</h4>
                          <p>{land.farmerName} - {land.farmerContact}</p>
                        </div>
                        
                        <Button 
                          className="w-full" 
                          onClick={() => handleContactFarmer(land.farmerName, land.farmerContact)}
                        >
                          Contact Owner
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    className="flex-1"
                    onClick={() => handleContactFarmer(land.farmerName, land.farmerContact)}
                  >
                    Contact Owner
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredLands.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold mb-2">No lands found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Land Listings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandForLeaseHome;