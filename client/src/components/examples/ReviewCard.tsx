import ReviewCard from '../ReviewCard';

export default function ReviewCardExample() {
  // todo: remove mock functionality
  const mockReview = {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    rating: 5,
    text: 'Absolutely incredible dining experience! The ribeye steak was cooked to perfection, and the ambiance was wonderful. The service was impeccable.',
    createdAt: '2024-01-15',
    isVisible: true,
  };

  return (
    <div className="max-w-sm">
      <ReviewCard review={mockReview} />
    </div>
  );
}
