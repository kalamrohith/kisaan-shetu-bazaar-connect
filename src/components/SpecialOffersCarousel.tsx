import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useToast } from '@/hooks/use-toast';

const SpecialOffersCarousel = () => {
  const { toast } = useToast();

  // Mock add to cart function for now
  const addToCart = (item: any) => {
    console.log('Adding to cart:', item);
  };

  const specialOffers = [
    {
      id: 'special-1',
      name: 'Premium Organic Bundle',
      originalPrice: 500,
      offerPrice: 350,
      discount: 30,
      image: '🌟',
      description: 'Mix of organic vegetables and fruits',
      farmer: 'Multiple Farmers',
      unit: 'bundle',
      validTill: '3 days left',
      gradient: 'from-primary/20 to-success/20'
    },
    {
      id: 'special-2',
      name: 'Fresh Fruit Basket',
      originalPrice: 800,
      offerPrice: 600,
      discount: 25,
      image: '🍓',
      description: 'Seasonal fresh fruits collection',
      farmer: 'Orchard Farmers',
      unit: 'basket',
      validTill: '2 days left',
      gradient: 'from-destructive/20 to-harvest/20'
    },
    {
      id: 'special-3',
      name: 'Spice Master Collection',
      originalPrice: 400,
      offerPrice: 280,
      discount: 30,
      image: '🌶️',
      description: 'Authentic spices from farms',
      farmer: 'Spice Growers',
      unit: 'set',
      validTill: '5 days left',
      gradient: 'from-earth/20 to-accent/20'
    },
    {
      id: 'special-4',
      name: 'Grain Variety Pack',
      originalPrice: 600,
      offerPrice: 450,
      discount: 25,
      image: '🌾',
      description: 'Mixed grains and cereals',
      farmer: 'Grain Farmers',
      unit: 'pack',
      validTill: '1 week left',
      gradient: 'from-harvest/20 to-primary/20'
    },
    {
      id: 'special-5',
      name: 'Dairy Fresh Combo',
      originalPrice: 300,
      offerPrice: 240,
      discount: 20,
      image: '🥛',
      description: 'Fresh dairy products bundle',
      farmer: 'Dairy Farmers',
      unit: 'combo',
      validTill: '24 hours left',
      gradient: 'from-secondary/20 to-muted/20'
    }
  ];

  const handleAddToCart = (offer: typeof specialOffers[0]) => {
    addToCart({
      id: offer.id,
      name: offer.name,
      price: offer.offerPrice,
      unit: offer.unit,
      image: offer.image,
      farmer: offer.farmer
    });
    toast({
      title: "Special offer added!",
      description: `${offer.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-accent/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ⚡ Special Flash Offers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Limited time deals on premium farm products. Grab these amazing offers before they're gone!
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {specialOffers.map((offer) => (
                <CarouselItem key={offer.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Offer Header */}
                      <div className={`relative p-6 bg-gradient-to-br ${offer.gradient}`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-5xl">{offer.image}</div>
                          <div className="text-right">
                            <Badge variant="destructive" className="mb-2 text-xs">
                              {offer.discount}% OFF
                            </Badge>
                            <div className="text-xs text-muted-foreground font-medium">
                              ⏰ {offer.validTill}
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {offer.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {offer.description}
                        </p>
                      </div>

                      {/* Offer Details */}
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-primary">
                                ₹{offer.offerPrice}
                              </span>
                              <span className="text-lg line-through text-muted-foreground">
                                ₹{offer.originalPrice}
                              </span>
                            </div>
                            <div className="text-sm text-success font-medium">
                              Save ₹{offer.originalPrice - offer.offerPrice}
                            </div>
                          </div>
                        </div>

                        <div className="text-sm text-muted-foreground">
                          <div>by {offer.farmer}</div>
                        </div>

                        <Button 
                          className="w-full bg-gradient-to-r from-primary to-success hover:from-primary/90 hover:to-success/90"
                          onClick={() => handleAddToCart(offer)}
                        >
                          🔥 Grab This Deal
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <div className="text-center mt-8">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            🎯 View All Special Offers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersCarousel;