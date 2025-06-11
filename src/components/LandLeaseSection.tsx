import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Plus, MapPin, Phone, Mail, Droplets, Trash2 } from 'lucide-react';

interface LandLease {
  id: string;
  title: string;
  area: string;
  price: number;
  priceUnit: string;
  address: string;
  soilType: string;
  waterFacility: string;
  description: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  images: string[];
}

const LandLeaseSection = () => {
  const [landLeases, setLandLeases] = useState<LandLease[]>([
    {
      id: '1',
      title: 'Premium Agricultural Land',
      area: '5 acres',
      price: 15000,
      priceUnit: 'month',
      address: 'Village Rampur, District Meerut, UP',
      soilType: 'Black Cotton Soil',
      waterFacility: 'Tube well + Canal irrigation',
      description: 'Fertile agricultural land suitable for wheat, rice, and vegetable cultivation. Well-connected to main road.',
      contactName: 'Rajesh Kumar',
      contactPhone: '+91 9876543210',
      contactEmail: 'rajesh.farmer@email.com',
      images: ['🌾', '🚰', '🛣️']
    }
  ]);

  const [newLand, setNewLand] = useState({
    title: '',
    area: '',
    price: '',
    priceUnit: 'month',
    address: '',
    soilType: '',
    waterFacility: '',
    description: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    images: ['🌾']
  });

  const [isAddingLand, setIsAddingLand] = useState(false);
  const { toast } = useToast();

  const soilTypes = [
    'Black Cotton Soil',
    'Red Soil', 
    'Alluvial Soil',
    'Laterite Soil',
    'Sandy Soil',
    'Clay Soil',
    'Loamy Soil'
  ];

  const landEmojis = ['🌾', '🌱', '🚰', '🛣️', '🏞️', '🌳', '🚜'];

  const handleAddLand = (e: React.FormEvent) => {
    e.preventDefault();
    
    const land: LandLease = {
      id: Date.now().toString(),
      title: newLand.title,
      area: newLand.area,
      price: parseFloat(newLand.price),
      priceUnit: newLand.priceUnit,
      address: newLand.address,
      soilType: newLand.soilType,
      waterFacility: newLand.waterFacility,
      description: newLand.description,
      contactName: newLand.contactName,
      contactPhone: newLand.contactPhone,
      contactEmail: newLand.contactEmail,
      images: newLand.images
    };

    setLandLeases([...landLeases, land]);
    setNewLand({
      title: '',
      area: '',
      price: '',
      priceUnit: 'month',
      address: '',
      soilType: '',
      waterFacility: '',
      description: '',
      contactName: '',
      contactPhone: '',
      contactEmail: '',
      images: ['🌾']
    });
    setIsAddingLand(false);

    toast({
      title: 'Land Listed Successfully!',
      description: `${land.title} has been added to land lease listings.`,
    });
  };

  const handleDeleteLand = (id: string) => {
    const land = landLeases.find(l => l.id === id);
    setLandLeases(landLeases.filter(l => l.id !== id));
    
    toast({
      title: 'Land Listing Removed',
      description: `${land?.title} has been removed from listings.`,
      variant: 'destructive',
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Land for Lease
            </CardTitle>
            <CardDescription>
              List your agricultural land for lease to other farmers
            </CardDescription>
          </div>
          <Dialog open={isAddingLand} onOpenChange={setIsAddingLand}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Land Listing
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add Land for Lease</DialogTitle>
                <DialogDescription>
                  Provide details about your land to attract potential lessees
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleAddLand} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="landTitle">Land Title</Label>
                  <Input
                    id="landTitle"
                    placeholder="e.g., Premium Agricultural Land"
                    value={newLand.title}
                    onChange={(e) => setNewLand({...newLand, title: e.target.value})}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="area">Land Area</Label>
                    <Input
                      id="area"
                      placeholder="e.g., 5 acres"
                      value={newLand.area}
                      onChange={(e) => setNewLand({...newLand, area: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Lease Price (₹)</Label>
                    <div className="flex gap-2">
                      <Input
                        id="price"
                        type="number"
                        placeholder="15000"
                        value={newLand.price}
                        onChange={(e) => setNewLand({...newLand, price: e.target.value})}
                        required
                        className="flex-1"
                      />
                      <Select value={newLand.priceUnit} onValueChange={(value) => setNewLand({...newLand, priceUnit: value})}>
                        <SelectTrigger className="w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="month">/ month</SelectItem>
                          <SelectItem value="year">/ year</SelectItem>
                          <SelectItem value="season">/ season</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Complete Address</Label>
                  <Textarea
                    id="address"
                    placeholder="Village, District, State with pincode"
                    value={newLand.address}
                    onChange={(e) => setNewLand({...newLand, address: e.target.value})}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="soilType">Soil Type</Label>
                    <Select value={newLand.soilType} onValueChange={(value) => setNewLand({...newLand, soilType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select soil type" />
                      </SelectTrigger>
                      <SelectContent>
                        {soilTypes.map((soil) => (
                          <SelectItem key={soil} value={soil}>{soil}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="waterFacility">Water Facility</Label>
                    <Input
                      id="waterFacility"
                      placeholder="e.g., Tube well + Canal irrigation"
                      value={newLand.waterFacility}
                      onChange={(e) => setNewLand({...newLand, waterFacility: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Land Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the land features, connectivity, suitable crops..."
                    value={newLand.description}
                    onChange={(e) => setNewLand({...newLand, description: e.target.value})}
                    required
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name</Label>
                    <Input
                      id="contactName"
                      placeholder="Your name"
                      value={newLand.contactName}
                      onChange={(e) => setNewLand({...newLand, contactName: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Phone Number</Label>
                    <Input
                      id="contactPhone"
                      placeholder="+91 9876543210"
                      value={newLand.contactPhone}
                      onChange={(e) => setNewLand({...newLand, contactPhone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email (Optional)</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      placeholder="your@email.com"
                      value={newLand.contactEmail}
                      onChange={(e) => setNewLand({...newLand, contactEmail: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsAddingLand(false)} className="flex-1">
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1">
                    Add Land Listing
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        {landLeases.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🌾</div>
            <h3 className="text-lg font-semibold mb-2">No land listings yet</h3>
            <p className="text-muted-foreground mb-4">Start by listing your first land for lease</p>
            <Button onClick={() => setIsAddingLand(true)}>
              Add Your First Land Listing
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {landLeases.map((land) => (
              <Card key={land.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2">
                      {land.images.map((img, idx) => (
                        <span key={idx} className="text-2xl">{img}</span>
                      ))}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => handleDeleteLand(land.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{land.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {land.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Area:</span>
                      <Badge variant="outline">{land.area}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Price:</span>
                      <span className="font-bold text-primary">₹{land.price}/{land.priceUnit}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground line-clamp-1">{land.address}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Soil:</span>
                      <Badge variant="secondary">{land.soilType}</Badge>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">{land.waterFacility}</span>
                    </div>
                    
                    <div className="pt-3 border-t">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <span>{land.contactPhone}</span>
                        </div>
                        {land.contactEmail && (
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>{land.contactEmail}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm font-medium mt-2">Contact: {land.contactName}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LandLeaseSection;