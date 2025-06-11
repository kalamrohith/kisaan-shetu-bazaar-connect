import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

const Rating = ({ 
  rating, 
  maxRating = 5, 
  size = 'md', 
  showValue = true, 
  interactive = false,
  onRatingChange 
}: RatingProps) => {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const handleStarClick = (starRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {Array.from({ length: maxRating }, (_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= rating;
          const isHalfFilled = starValue - 0.5 <= rating && starValue > rating;
          
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleStarClick(starValue)}
              disabled={!interactive}
              className={cn(
                'relative transition-colors',
                interactive && 'hover:scale-110 cursor-pointer',
                !interactive && 'cursor-default'
              )}
            >
              <Star 
                className={cn(
                  sizeClasses[size],
                  'transition-colors',
                  isFilled || isHalfFilled 
                    ? (rating >= 3 ? 'fill-yellow-500 text-yellow-500' : 'fill-warning text-warning')
                    : 'text-muted-foreground'
                )}
              />
              {isHalfFilled && (
                <Star 
                  className={cn(
                    sizeClasses[size],
                    `absolute top-0 left-0 ${rating >= 3 ? 'fill-yellow-500 text-yellow-500' : 'fill-warning text-warning'}`,
                    'clip-path-[inset(0_50%_0_0)]'
                  )}
                  style={{ clipPath: 'inset(0 50% 0 0)' }}
                />
              )}
            </button>
          );
        })}
      </div>
      
      {showValue && (
        <span className={cn('font-medium text-foreground ml-1', textSizeClasses[size])}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default Rating;