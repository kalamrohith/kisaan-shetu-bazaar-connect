import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash, ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Rating from './Rating';
import LandLeaseSection from './LandLeaseSection';

interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  description: string;
  image: string;
  isOrganic: boolean;
  stock: number;
  rating: number;
  reviewCount: number;
}

const FarmerDashboard = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Organic Tomatoes',
      price: 60,
      unit: 'kg',
      category: 'Vegetables',
      description: 'Fresh organic tomatoes grown without pesticides',
      image: '🍅',
      isOrganic: true,
      stock: 50,
      rating: 4.5,
      reviewCount: 23,
    },
    {
      id: '2',
      name: 'Fresh Carrots',
      price: 40,
      unit: 'kg',
      category: 'Vegetables',
      description: 'Sweet and crunchy carrots perfect for cooking',
      image: '🥕',
      isOrganic: false,
      stock: 30,
      rating: 4.2,
      reviewCount: 18,
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    unit: 'kg',
    category: '',
    description: '',
    image: '',
    isOrganic: false,
    stock: '',
  });

  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const categories = ['Vegetables', 'Fruits', 'Grains', 'Spices', 'Dairy', 'Others'];
  const productEmojis = ['🍅', '🥕', '🍎', '🥬', '🌾', '🌶️', '🥛', '🥭', '🍌', '🥔'];

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    
    const product: Product = {
      id: Date.now().toString(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      unit: newProduct.unit,
      category: newProduct.category,
      description: newProduct.description,
      image: newProduct.image || '🥬',
      isOrganic: newProduct.isOrganic,
      stock: parseInt(newProduct.stock),
      rating: 0,
      reviewCount: 0,
    };

    setProducts([...products, product]);
    setNewProduct({
      name: '',
      price: '',
      unit: 'kg',
      category: '',
      description: '',
      image: '',
      isOrganic: false,
      stock: '',
    });
    setIsAddingProduct(false);

    toast({
      title: 'Product Added Successfully!',
      description: `${product.name} has been added to your inventory.`,
    });
  };

  const handleDeleteProduct = (id: string) => {
    const product = products.find(p => p.id === id);
    setProducts(products.filter(p => p.id !== id));
    
    toast({
      title: 'Product Deleted',
      description: `${product?.name} has been removed from your inventory.`,
      variant: 'destructive',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Farmer Dashboard</h1>
                <p className="text-muted-foreground">Manage your products and track your sales</p>
              </div>
            </div>
            
            <Dialog open={isAddingProduct} onOpenChange={setIsAddingProduct}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add New Product
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Product</DialogTitle>
                  <DialogDescription>
                    Add a new product to your inventory to start selling
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleAddProduct} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="productName">Product Name</Label>
                    <Input
                      id="productName"
                      placeholder="e.g., Organic Tomatoes"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price</Label>
                      <Input
                        id="price"
                        type="number"
                        placeholder="0"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="unit">Unit</Label>
                      <Select value={newProduct.unit} onValueChange={(value) => setNewProduct({...newProduct, unit: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kg">kg</SelectItem>
                          <SelectItem value="dozen">dozen</SelectItem>
                          <SelectItem value="liter">liter</SelectItem>
                          <SelectItem value="piece">piece</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={newProduct.category} onValueChange={(value) => setNewProduct({...newProduct, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Product Emoji</Label>
                    <Select value={newProduct.image} onValueChange={(value) => setNewProduct({...newProduct, image: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose an emoji" />
                      </SelectTrigger>
                      <SelectContent>
                        {productEmojis.map((emoji) => (
                          <SelectItem key={emoji} value={emoji}>
                            <span className="text-xl">{emoji}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stock">Stock Quantity</Label>
                    <Input
                      id="stock"
                      type="number"
                      placeholder="Available quantity"
                      value={newProduct.stock}
                      onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your product..."
                      value={newProduct.description}
                      onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="organic"
                      checked={newProduct.isOrganic}
                      onChange={(e) => setNewProduct({...newProduct, isOrganic: e.target.checked})}
                      className="rounded border-border"
                    />
                    <Label htmlFor="organic">Organic Product</Label>
                  </div>

                  <div className="flex gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsAddingProduct(false)} className="flex-1">
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1">
                      Add Product
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{products.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Stock</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {products.reduce((sum, p) => sum + p.stock, 0)} units
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                ₹{products.length > 0 ? Math.round(products.reduce((sum, p) => sum + p.price, 0) / products.length) : 0}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Organic Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">
                {products.filter(p => p.isOrganic).length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="products">Products Management</TabsTrigger>
            <TabsTrigger value="land">Land for Lease</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Your Products</CardTitle>
                <CardDescription>
                  Manage your product inventory and pricing
                </CardDescription>
              </CardHeader>
          <CardContent>
            {products.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📦</div>
                <h3 className="text-lg font-semibold mb-2">No products yet</h3>
                <p className="text-muted-foreground mb-4">Start by adding your first product to begin selling</p>
                <Button onClick={() => setIsAddingProduct(true)}>
                  Add Your First Product
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl">{product.image}</div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-destructive hover:text-destructive"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
                          {product.isOrganic && (
                            <Badge variant="secondary" className="bg-success text-success-foreground">
                              Organic
                            </Badge>
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {product.description}
                        </p>
                        
                        {product.rating > 0 && (
                          <div className="flex items-center gap-2">
                            <Rating rating={product.rating} showValue={false} size="sm" />
                            <span className="text-xs text-muted-foreground">
                              ({product.reviewCount} reviews)
                            </span>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between pt-2">
                          <div>
                            <div className="text-xl font-bold text-primary">
                              ₹{product.price}/{product.unit}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Stock: {product.stock} {product.unit}
                            </div>
                          </div>
                          <Badge variant="outline">{product.category}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="land">
            <LandLeaseSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FarmerDashboard;