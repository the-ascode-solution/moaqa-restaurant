import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Flame, Wheat } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isGlutenFree?: boolean;
}

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer"
      data-testid={`card-menu-item-${item.id}`}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-medium text-lg text-foreground">{item.name}</h3>
          <span className="font-semibold text-lg text-primary whitespace-nowrap">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {item.description}
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {item.isVegetarian && (
            <Badge variant="secondary" className="gap-1">
              <Leaf className="h-3 w-3" />
              <span className="text-xs">Vegetarian</span>
            </Badge>
          )}
          {item.isSpicy && (
            <Badge variant="secondary" className="gap-1">
              <Flame className="h-3 w-3" />
              <span className="text-xs">Spicy</span>
            </Badge>
          )}
          {item.isGlutenFree && (
            <Badge variant="secondary" className="gap-1">
              <Wheat className="h-3 w-3" />
              <span className="text-xs">Gluten-Free</span>
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
