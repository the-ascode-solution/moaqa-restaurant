import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { Review } from './ReviewCard';

// todo: remove mock functionality
const initialReviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    rating: 5,
    text: 'Absolutely incredible dining experience! The ribeye steak was cooked to perfection, and the ambiance was wonderful.',
    createdAt: '2024-01-15',
    isVisible: true,
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael@example.com',
    rating: 5,
    text: 'The Mediterranean salad was fresh and flavorful. Service was impeccable.',
    createdAt: '2024-01-10',
    isVisible: true,
  },
  {
    id: '3',
    name: 'Emily Davis',
    email: 'emily@example.com',
    rating: 4,
    text: 'Lovely atmosphere and great food. The mushroom risotto was creamy and delicious.',
    createdAt: '2024-01-05',
    isVisible: true,
  },
  {
    id: '4',
    name: 'James Wilson',
    email: 'james@example.com',
    rating: 5,
    text: 'Best tiramisu I have ever had! Highly recommend for date nights.',
    createdAt: '2023-12-28',
    isVisible: true,
  },
  {
    id: '5',
    name: 'Anonymous User',
    email: 'anon@example.com',
    rating: 2,
    text: 'Not worth the price. Food was mediocre at best.',
    createdAt: '2024-01-18',
    isVisible: false,
  },
  {
    id: '6',
    name: 'New Customer',
    email: 'new@example.com',
    rating: 5,
    text: 'Just discovered this gem! The salmon was divine and perfectly seasoned.',
    createdAt: '2024-01-20',
    isVisible: false,
  },
];

type FilterType = 'all' | 'visible' | 'hidden';

export default function ReviewManagement() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [filter, setFilter] = useState<FilterType>('all');
  const { toast } = useToast();

  const toggleVisibility = (id: string) => {
    setReviews(prev =>
      prev.map(review =>
        review.id === id ? { ...review, isVisible: !review.isVisible } : review
      )
    );
    const review = reviews.find(r => r.id === id);
    toast({
      title: review?.isVisible ? 'Review hidden' : 'Review published',
      description: review?.isVisible
        ? 'This review is no longer visible on the public site.'
        : 'This review is now visible on the public site.',
    });
  };

  const filteredReviews = reviews.filter(review => {
    if (filter === 'visible') return review.isVisible;
    if (filter === 'hidden') return !review.isVisible;
    return true;
  });

  const visibleCount = reviews.filter(r => r.isVisible).length;
  const hiddenCount = reviews.filter(r => !r.isVisible).length;

  return (
    <div className="p-6" data-testid="page-review-management">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-foreground">Review Management</h1>
        <p className="text-muted-foreground mt-1">
          Moderate customer reviews and control what appears on your public site.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <Tabs value={filter} onValueChange={(v) => setFilter(v as FilterType)}>
          <TabsList>
            <TabsTrigger value="all" data-testid="tab-all-reviews">
              All ({reviews.length})
            </TabsTrigger>
            <TabsTrigger value="visible" data-testid="tab-visible-reviews">
              <Eye className="h-4 w-4 mr-1" />
              Visible ({visibleCount})
            </TabsTrigger>
            <TabsTrigger value="hidden" data-testid="tab-hidden-reviews">
              <EyeOff className="h-4 w-4 mr-1" />
              Hidden ({hiddenCount})
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reviewer</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="max-w-md">Review</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Visibility</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReviews.map((review) => (
                <TableRow key={review.id} data-testid={`row-review-${review.id}`}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-0.5">
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
                  </TableCell>
                  <TableCell className="max-w-md">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {review.text}
                    </p>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge variant={review.isVisible ? 'default' : 'secondary'}>
                      {review.isVisible ? 'Visible' : 'Hidden'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Switch
                      checked={review.isVisible}
                      onCheckedChange={() => toggleVisibility(review.id)}
                      data-testid={`switch-visibility-${review.id}`}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredReviews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No reviews found.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
