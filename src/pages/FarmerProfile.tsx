import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Star, Award, Users, Calendar } from 'lucide-react';
import Rating from '@/components/Rating';

const FarmerProfile = () => {
  const { farmerId } = useParams();

  // Mock farmer data - in real app, fetch based on farmerId
  const farmer = {
    id: farmerId || '1',
    name: 'Rajesh Kumar',
    location: 'Maharashtra, India',
    experience: '15 years',
    specialization: 'Organic Vegetables',
    rating: 4.8,
    reviewCount: 156,
    phone: '+91 98765 43210',
    email: 'rajesh.kumar@email.com',
    joinedDate: 'January 2020',
    totalCustomers: 850,
    bio: 'Passionate organic farmer with 15 years of experience. I specialize in growing chemical-free vegetables using traditional and modern sustainable farming techniques. My farm follows organic certification standards and I believe in providing the freshest produce directly to customers.',
    certifications: ['Organic Certified', 'Sustainable Farming', 'Quality Assured'],
    achievements: ['Best Organic Farmer 2023', 'Community Leader Award', '500+ Happy Customers'],
    farmSize: '25 acres',
    cropsGrown: ['Tomatoes', 'Carrots', 'Spinach', 'Onions', 'Potatoes', 'Cabbage'],
    avatar: 'RK',
  };

  const products = [
    {
      id: '1',
      name: 'Organic Tomatoes',
      price: 60,
      unit: 'kg',
      image: '🍅',
      farmer: farmer.name,
      location: farmer.location,
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
      farmer: farmer.name,
      location: farmer.location,
      category: 'Vegetables',
      isOrganic: true,
      rating: 4.2,
      reviewCount: 18,
    },
    {
      id: '3',
      name: 'Organic Spinach',
      price: 35,
      unit: 'kg',
      image: '🥬',
      farmer: farmer.name,
      location: farmer.location,
      category: 'Vegetables',
      isOrganic: true,
      rating: 4.6,
      reviewCount: 29,
    },
    {
      id: '4',
      name: 'Fresh Onions',
      price: 30,
      unit: 'kg',
      image: '🧅',
      farmer: farmer.name,
      location: farmer.location,
      category: 'Vegetables',
      isOrganic: true,
      rating: 4.3,
      reviewCount: 15,
    },
  ];

  const reviews = [
    {
      id: 1,
      customerName: 'Anita Sharma',
      rating: 5,
      comment: 'Excellent quality vegetables! Rajesh is very knowledgeable and always provides fresh produce.',
      date: '2 days ago',
      verified: true,
    },
    {
      id: 2,
      customerName: 'Suresh Patel',
      rating: 4.5,
      comment: 'Great farmer with genuine organic products. Highly recommend his tomatoes!',
      date: '1 week ago',
      verified: true,
    },
    {
      id: 3,
      customerName: 'Priya Singh',
      rating: 5,
      comment: 'Very reliable and honest farmer. The vegetables stay fresh for much longer.',
      date: '3 days ago',
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Farmer Header */}
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/20 to-earth/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <Avatar className="w-32 h-32 border-4 border-card">
                  <AvatarFallback className="bg-primary text-primary-foreground text-4xl font-bold">
                    {farmer.avatar}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-4xl font-bold text-foreground">{farmer.name}</h1>
                      <Badge variant="secondary" className="bg-success text-success-foreground">
                        Verified Farmer
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{farmer.location}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <Rating rating={farmer.rating} showValue={true} />
                      <span className="text-muted-foreground">({farmer.reviewCount} reviews)</span>
                    </div>
                  </div>

                  <p className="text-foreground leading-relaxed">{farmer.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {farmer.certifications.map((cert) => (
                      <Badge key={cert} variant="outline" className="bg-card/80">
                        {cert}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Contact Farmer
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Farmer Stats */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{farmer.experience}</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{farmer.farmSize}</div>
                  <div className="text-sm text-muted-foreground">Farm Size</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{farmer.totalCustomers}+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{farmer.cropsGrown.length}</div>
                  <div className="text-sm text-muted-foreground">Crop Varieties</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">Available Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Farmer Details & Reviews */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
              {/* Farmer Details */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {farmer.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-harvest" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Crops Grown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {farmer.cropsGrown.map((crop) => (
                        <Badge key={crop} variant="outline">
                          {crop}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      About
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Joined {farmer.joinedDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Specializes in {farmer.specialization}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Customer Reviews */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Customer Reviews</h3>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-foreground">{review.customerName}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Rating rating={review.rating} showValue={false} size="sm" />
                              <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                          {review.verified && (
                            <Badge variant="secondary" className="bg-success text-success-foreground text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-foreground">"{review.comment}"</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FarmerProfile;