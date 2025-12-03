import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const reviewSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  rating: z.number().min(1, 'Please select a rating').max(5),
  text: z.string().min(10, 'Review must be at least 10 characters'),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

interface ReviewFormProps {
  onSubmit?: (data: ReviewFormData) => Promise<void>;
}

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: '',
      email: '',
      rating: 0,
      text: '',
    },
  });

  const handleSubmit = async (data: ReviewFormData) => {
    setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        // todo: remove mock functionality
        console.log('Review submitted:', data);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      toast({
        title: 'Review Submitted!',
        description: 'Thank you for your feedback. Your review will be visible after approval.',
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit review. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedRating = form.watch('rating');

  return (
    <Card data-testid="form-review">
      <CardHeader>
        <CardTitle className="font-serif text-xl">Share Your Experience</CardTitle>
        <CardDescription>
          We value your feedback. Reviews are subject to approval before being published.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} data-testid="input-review-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" type="email" {...field} data-testid="input-review-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="p-1 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          onClick={() => field.onChange(star)}
                          data-testid={`button-rating-${star}`}
                        >
                          <Star
                            className={`h-6 w-6 transition-colors ${
                              star <= (hoveredStar || selectedRating)
                                ? 'fill-primary text-primary'
                                : 'fill-muted text-muted-foreground'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Review</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your experience..."
                      className="min-h-[120px]"
                      {...field}
                      data-testid="input-review-text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full md:w-auto"
              disabled={isSubmitting}
              data-testid="button-submit-review"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
