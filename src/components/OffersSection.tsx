import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const OffersSection = () => {
  const offers = [
    {
      id: 1,
      title: 'Fresh Vegetables Bundle',
      description: 'Get 5kg mixed seasonal vegetables at special price',
      originalPrice: 300,
      offerPrice: 220,
      discount: 25,
      image: '🥕',
      farmer: 'Ravi Kumar',
      location: 'Punjab',
      validTill: '2 days left',
    },
    {
      id: 2,
      title: 'Organic Fruit Basket',
      description: 'Premium organic fruits directly from the orchard',
      originalPrice: 800,
      offerPrice: 600,
      discount: 25,
      image: '🍎',
      farmer: 'Priya Sharma',
      location: 'Himachal Pradesh',
      validTill: '5 days left',
    },
    {
      id: 3,
      title: 'Rice & Wheat Combo',
      description: 'Premium quality rice and wheat for your family',
      originalPrice: 1200,
      offerPrice: 950,
      discount: 20,
      image: '🌾',
      farmer: 'Suresh Patel',
      location: 'Gujarat',
      validTill: '1 week left',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Special Offers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these amazing deals from our farmer partners. 
            Limited time offers on fresh, quality produce.
          </p>
        </div>

        {/* Horizontal Scrollable Offers */}
        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
            {offers.map((offer) => (
              <Card 
                key={offer.id} 
                className="w-80 group hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-0">
                  {/* Offer Header */}
                  <div className="relative p-6 bg-gradient-to-br from-primary/10 to-accent/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-6xl">{offer.image}</div>
                      <div className="text-right">
                        <Badge variant="destructive" className="mb-2">
                          {offer.discount}% OFF
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          {offer.validTill}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {offer.title}
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
                          You save ₹{offer.originalPrice - offer.offerPrice}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <div>by {offer.farmer}</div>
                      <div>{offer.location}</div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                      <Button className="flex-1">
                        Grab Offer
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Offers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;