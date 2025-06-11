import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Rating from './Rating';
import { MapPin, Star, User } from 'lucide-react';

interface ProductDetailModalProps {
  product: {
    id: string;
    name: string;
    price: number;
    unit: string;
    image: string;
    farmer: string;
    location: string;
    category: string;
    isOrganic?: boolean;
    discount?: number;
    rating?: number;
    reviewCount?: number;
    description?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, isOpen, onClose }: ProductDetailModalProps) => {
  const { toast } = useToast();

  if (!product) return null;

  const discountedPrice = product.discount ? product.price - (product.price * product.discount / 100) : product.price;

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
    onClose();
  };

  const handleContactFarmer = () => {
    toast({
      title: "Contact Details",
      description: `Contacting ${product.farmer} for ${product.name}`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="aspect-square rounded-lg overflow-hidden">
            {product.image.startsWith('http') ? (
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwQzE0NC43NzIgMTAwIDEwMCAxNDQuNzcyIDEwMCAyMDBDMTAwIDI1NS4yMjggMTQ0Ljc3MiAzMDAgMjAwIDMwMEMyNTUuMjI4IDMwMCAzMDAgMjU1LjIyOCAzMDAgMjAwQzMwMCAxNDQuNzcyIDI1NS4yMjggMTAwIDIwMCAxMDBaIiBmaWxsPSIjRTVFN0VCIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBM0FGIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiPkltYWdlPC90ZXh0Pgo8L3N2Zz4K';
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary/30 flex items-center justify-center">
                <span className="text-8xl">{product.image}</span>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">by {product.farmer}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{product.location}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                {product.isOrganic && (
                  <Badge variant="secondary" className="bg-success text-success-foreground">
                    Organic
                  </Badge>
                )}
                {product.discount && (
                  <Badge variant="destructive">
                    {product.discount}% OFF
                  </Badge>
                )}
                <Badge variant="outline">
                  {product.category}
                </Badge>
              </div>
            </div>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2">
                <Rating rating={product.rating} showValue={false} size="sm" />
                <span className="text-sm text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary">
                ₹{discountedPrice}
              </span>
              <span className="text-lg text-muted-foreground">/{product.unit}</span>
              {product.discount && (
                <span className="text-lg line-through text-muted-foreground">
                  ₹{product.price}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">
                {product.description || `Fresh ${product.name.toLowerCase()} directly from ${product.farmer}'s farm in ${product.location}. ${product.isOrganic ? 'Organically grown without harmful pesticides.' : 'Conventionally grown with standard farming practices.'}`}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-4">
              <Button variant="outline" className="flex-1" onClick={handleContactFarmer}>
                Contact Farmer
              </Button>
              <Button className="flex-1" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;