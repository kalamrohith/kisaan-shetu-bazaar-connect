import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Rating from './Rating';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Anita Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'Fresh vegetables delivered right to my doorstep! The quality is amazing and the farmers are so genuine. Highly recommended!',
      date: '2 days ago',
      product: 'Organic Tomatoes',
      verified: true,
    },
    {
      id: 2,
      name: 'Rajesh Patel',
      location: 'Delhi',
      rating: 4.5,
      comment: 'Great platform to connect with local farmers. The produce is fresh and the prices are fair. Love supporting our farmers directly.',
      date: '1 week ago',
      product: 'Fresh Carrots',
      verified: true,
    },
    {
      id: 3,
      name: 'Priya Kumar',
      location: 'Bangalore',
      rating: 5,
      comment: 'The best organic fruits I have ever tasted! Direct from farm means maximum freshness. Will definitely order again.',
      date: '3 days ago',
      product: 'Premium Apples',
      verified: true,
    },
    {
      id: 4,
      name: 'Suresh Yadav',
      location: 'Chennai',
      rating: 4,
      comment: 'Good quality rice and excellent customer service. The farmer was very helpful in answering all my questions about the product.',
      date: '5 days ago',
      product: 'Basmati Rice',
      verified: true,
    },
    {
      id: 5,
      name: 'Meera Singh',
      location: 'Pune',
      rating: 5,
      comment: 'Finally found a reliable source for organic vegetables! The spinach was so fresh and lasted much longer than store-bought ones.',
      date: '1 week ago',
      product: 'Organic Spinach',
      verified: true,
    },
    {
      id: 6,
      name: 'Vikram Gupta',
      location: 'Kolkata',
      rating: 4.5,
      comment: 'Amazing mangoes! Sweet, juicy and perfectly ripe. The farmer even gave tips on how to store them properly. Great experience!',
      date: '4 days ago',
      product: 'Fresh Mangoes',
      verified: true,
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real reviews from real customers who love the fresh quality and direct farmer connection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      {review.verified && (
                        <span className="text-xs bg-success text-success-foreground px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Rating rating={review.rating} showValue={false} size="sm" />
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>

                <blockquote className="text-sm text-foreground mb-3 line-clamp-4">
                  "{review.comment}"
                </blockquote>

                <div className="text-xs text-muted-foreground">
                  Product: <span className="text-primary font-medium">{review.product}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.8</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2,500+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;