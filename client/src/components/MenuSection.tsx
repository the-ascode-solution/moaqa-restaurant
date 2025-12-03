import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import MenuItemCard, { type MenuItem } from './MenuItemCard';

import steakImage from '@assets/generated_images/grilled_ribeye_steak_dish.png';
import salmonImage from '@assets/generated_images/pan-seared_salmon_fillet.png';
import saladImage from '@assets/generated_images/fresh_mediterranean_salad.png';
import risottoImage from '@assets/generated_images/creamy_mushroom_risotto.png';
import tiramisuImage from '@assets/generated_images/classic_tiramisu_dessert.png';

// todo: remove mock functionality
const mockMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Grilled Ribeye Steak',
    description: 'Prime ribeye with herb butter, roasted vegetables, and garlic mashed potatoes',
    price: 42.99,
    imageUrl: steakImage,
    category: 'Main Course',
    isGlutenFree: true,
  },
  {
    id: '2',
    name: 'Pan-Seared Salmon',
    description: 'Fresh Atlantic salmon with lemon dill sauce, asparagus, and cherry tomatoes',
    price: 34.99,
    imageUrl: salmonImage,
    category: 'Main Course',
    isGlutenFree: true,
  },
  {
    id: '3',
    name: 'Mediterranean Salad',
    description: 'Fresh greens with feta cheese, olives, cucumbers, tomatoes, and olive oil drizzle',
    price: 16.99,
    imageUrl: saladImage,
    category: 'Appetizers',
    isVegetarian: true,
    isGlutenFree: true,
  },
  {
    id: '4',
    name: 'Mushroom Risotto',
    description: 'Creamy arborio rice with wild mushrooms, parmesan, and truffle oil',
    price: 28.99,
    imageUrl: risottoImage,
    category: 'Main Course',
    isVegetarian: true,
  },
  {
    id: '5',
    name: 'Classic Tiramisu',
    description: 'Traditional Italian dessert with espresso-soaked ladyfingers and mascarpone cream',
    price: 12.99,
    imageUrl: tiramisuImage,
    category: 'Desserts',
    isVegetarian: true,
  },
  {
    id: '6',
    name: 'Spicy Thai Curry',
    description: 'Aromatic red curry with coconut milk, vegetables, and jasmine rice',
    price: 24.99,
    imageUrl: risottoImage,
    category: 'Main Course',
    isSpicy: true,
    isVegetarian: true,
  },
];

const categories = ['All', 'Appetizers', 'Main Course', 'Desserts', 'Beverages'];

interface MenuSectionProps {
  items?: MenuItem[];
  isLoading?: boolean;
}

export default function MenuSection({ items = mockMenuItems, isLoading = false }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 px-4 bg-background" data-testid="section-menu">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Menu
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Culinary Masterpieces
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, each crafted with the finest ingredients
            and prepared with passion by our expert chefs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              data-testid={`button-category-${category.toLowerCase().replace(' ', '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square w-full rounded-md" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {filteredItems.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No items found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
