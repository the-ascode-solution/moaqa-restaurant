import MenuItemCard from '../MenuItemCard';
import steakImage from '@assets/generated_images/grilled_ribeye_steak_dish.png';

export default function MenuItemCardExample() {
  // todo: remove mock functionality
  const mockItem = {
    id: '1',
    name: 'Grilled Ribeye Steak',
    description: 'Prime ribeye with herb butter, roasted vegetables, and garlic mashed potatoes',
    price: 42.99,
    imageUrl: steakImage,
    category: 'Main Course',
    isGlutenFree: true,
  };

  return (
    <div className="max-w-xs">
      <MenuItemCard item={mockItem} />
    </div>
  );
}
