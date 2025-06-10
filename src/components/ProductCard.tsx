import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Rating from './Rating';

interface ProductCardProps {
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
}

const ProductCard = ({ 
  name, 
  price, 
  unit, 
  image, 
  farmer, 
  location, 
  category, 
  isOrganic, 
  discount,
  rating = 0,
  reviewCount = 0
}: ProductCardProps) => {
  const discountedPrice = discount ? price - (price * discount / 100) : price;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <div className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary/30 flex items-center justify-center">
            <span className="text-6xl">{image}</span>
          </div>
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isOrganic && (
              <Badge variant="secondary" className="bg-success text-success-foreground">
                Organic
              </Badge>
            )}
            {discount && (
              <Badge variant="destructive">
                {discount}% OFF
              </Badge>
            )}
          </div>

          {/* Category Badge */}
          <div className="absolute top-2 right-2">
            <Badge variant="outline" className="bg-card/80 backdrop-blur-sm">
              {category}
            </Badge>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">
              by {farmer} • {location}
            </p>
            {rating > 0 && (
              <div className="flex items-center gap-2 mt-1">
                <Rating rating={rating} showValue={false} size="sm" />
                <span className="text-xs text-muted-foreground">
                  ({reviewCount} reviews)
                </span>
              </div>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">
                ₹{discountedPrice}
              </span>
              <span className="text-sm text-muted-foreground">/{unit}</span>
              {discount && (
                <span className="text-sm line-through text-muted-foreground">
                  ₹{price}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="flex-1">
            Contact Farmer
          </Button>
          <Button className="flex-1">
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;