import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

export interface Review {
  id: string;
  name: string;
  email: string;
  rating: number;
  text: string;
  createdAt: string;
  isVisible: boolean;
}

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const initials = review.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="h-full" data-testid={`card-review-${review.id}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Avatar>
            <AvatarFallback className="bg-primary/10 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-foreground">{review.name}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(review.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-0.5 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-4 w-4 ${
                star <= review.rating
                  ? 'fill-primary text-primary'
                  : 'fill-muted text-muted'
              }`}
            />
          ))}
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
          {review.text}
        </p>
      </CardContent>
    </Card>
  );
}
