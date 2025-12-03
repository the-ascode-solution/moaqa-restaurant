import { Skeleton } from '@/components/ui/skeleton';
import ReviewCard, { type Review } from './ReviewCard';
import ReviewForm from './ReviewForm';

// todo: remove mock functionality
const mockReviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    rating: 5,
    text: 'Absolutely incredible dining experience! The ribeye steak was cooked to perfection, and the ambiance was wonderful. Will definitely be coming back for more.',
    createdAt: '2024-01-15',
    isVisible: true,
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael@example.com',
    rating: 5,
    text: 'The Mediterranean salad was fresh and flavorful. Service was impeccable, and the staff made excellent wine recommendations. A hidden gem in the city!',
    createdAt: '2024-01-10',
    isVisible: true,
  },
  {
    id: '3',
    name: 'Emily Davis',
    email: 'emily@example.com',
    rating: 4,
    text: 'Lovely atmosphere and great food. The mushroom risotto was creamy and delicious. Only minor feedback is that the wait time was a bit long during peak hours.',
    createdAt: '2024-01-05',
    isVisible: true,
  },
  {
    id: '4',
    name: 'James Wilson',
    email: 'james@example.com',
    rating: 5,
    text: 'Best tiramisu I have ever had! The dessert menu is outstanding, and the coffee was perfect. Highly recommend for date nights or special occasions.',
    createdAt: '2023-12-28',
    isVisible: true,
  },
  {
    id: '5',
    name: 'Olivia Martinez',
    email: 'olivia@example.com',
    rating: 5,
    text: 'The pan-seared salmon was divine. Fresh, perfectly seasoned, and beautifully presented. Chef Alessandro truly knows his craft.',
    createdAt: '2023-12-20',
    isVisible: true,
  },
  {
    id: '6',
    name: 'Daniel Brown',
    email: 'daniel@example.com',
    rating: 4,
    text: 'Great variety of cuisines all under one roof. The fusion dishes are creative and delicious. Will be bringing my family next time!',
    createdAt: '2023-12-15',
    isVisible: true,
  },
];

interface ReviewsSectionProps {
  reviews?: Review[];
  isLoading?: boolean;
  onSubmitReview?: (data: any) => Promise<void>;
}

export default function ReviewsSection({ 
  reviews = mockReviews, 
  isLoading = false,
  onSubmitReview 
}: ReviewsSectionProps) {
  const visibleReviews = reviews.filter(r => r.isVisible);

  return (
    <section className="py-20 px-4 bg-card" data-testid="section-reviews">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our valued guests about their dining experiences at SpiceHub.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-4 p-6 border rounded-md">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-16 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {visibleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}

        <div className="max-w-2xl mx-auto">
          <ReviewForm onSubmit={onSubmitReview} />
        </div>
      </div>
    </section>
  );
}
