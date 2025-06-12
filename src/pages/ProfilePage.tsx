import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, MapPin, Edit, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import { useCart } from '@/components/CartProvider';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ProfilePage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock user data - in real app this would come from authentication
  const userData = {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    phone: "+91 98765 43210",
    address: "Village Greenfield, Taluka Rural, District Farming, State 560001"
  };

  const handleRemoveFromCart = (id: string, name: string) => {
    removeFromCart(id);
    toast({
      title: "Removed from cart",
      description: `${name} has been removed from your cart.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Button variant="outline" size="sm" onClick={() => navigate('/')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-6 w-6" />
                  My Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Farmer Name</p>
                      <p className="font-medium">{userData.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email ID</p>
                      <p className="font-medium">{userData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone Number</p>
                      <p className="font-medium">{userData.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-medium">{userData.address}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Cart Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-6 w-6" />
                  My Cart ({getTotalItems()} items)
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cartItems.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Your cart is empty</p>
                    <Button 
                      className="mt-4" 
                      onClick={() => navigate('/products')}
                    >
                      Start Shopping
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Cart Items */}
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            {item.image.startsWith('http') ? (
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-muted flex items-center justify-center">
                                <span className="text-2xl">{item.image}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium truncate">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">by {item.farmer}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="font-bold text-primary">₹{item.price}</span>
                              <span className="text-sm text-muted-foreground">/{item.unit}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => handleRemoveFromCart(item.id, item.name)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Cart Total */}
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold">Total:</span>
                        <span className="text-2xl font-bold text-primary">
                          ₹{getTotalPrice().toLocaleString()}
                        </span>
                      </div>
                      <Button className="w-full" size="lg">
                        Proceed to Checkout
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;