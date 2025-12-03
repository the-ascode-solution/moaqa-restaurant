import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { Plus, Pencil, Trash2, Leaf, Flame, Wheat } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { MenuItem } from './MenuItemCard';

import steakImage from '@assets/generated_images/grilled_ribeye_steak_dish.png';
import salmonImage from '@assets/generated_images/pan-seared_salmon_fillet.png';
import saladImage from '@assets/generated_images/fresh_mediterranean_salad.png';
import risottoImage from '@assets/generated_images/creamy_mushroom_risotto.png';
import tiramisuImage from '@assets/generated_images/classic_tiramisu_dessert.png';

// todo: remove mock functionality
const initialMenuItems: MenuItem[] = [
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
];

const menuItemSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.coerce.number().min(0.01, 'Price must be greater than 0'),
  imageUrl: z.string().url('Please enter a valid URL'),
  category: z.string().min(1, 'Please select a category'),
  isVegetarian: z.boolean(),
  isSpicy: z.boolean(),
  isGlutenFree: z.boolean(),
});

type MenuItemFormData = z.infer<typeof menuItemSchema>;

const categories = ['Appetizers', 'Main Course', 'Desserts', 'Beverages'];

export default function MenuManagement() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<MenuItemFormData>({
    resolver: zodResolver(menuItemSchema),
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      imageUrl: '',
      category: '',
      isVegetarian: false,
      isSpicy: false,
      isGlutenFree: false,
    },
  });

  const openCreateDialog = () => {
    setEditingItem(null);
    form.reset({
      name: '',
      description: '',
      price: 0,
      imageUrl: '',
      category: '',
      isVegetarian: false,
      isSpicy: false,
      isGlutenFree: false,
    });
    setIsDialogOpen(true);
  };

  const openEditDialog = (item: MenuItem) => {
    setEditingItem(item);
    form.reset({
      name: item.name,
      description: item.description,
      price: item.price,
      imageUrl: item.imageUrl,
      category: item.category,
      isVegetarian: item.isVegetarian || false,
      isSpicy: item.isSpicy || false,
      isGlutenFree: item.isGlutenFree || false,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (data: MenuItemFormData) => {
    if (editingItem) {
      setMenuItems(prev =>
        prev.map(item =>
          item.id === editingItem.id ? { ...item, ...data } : item
        )
      );
      toast({ title: 'Menu item updated successfully' });
    } else {
      const newItem: MenuItem = {
        id: Date.now().toString(),
        ...data,
      };
      setMenuItems(prev => [...prev, newItem]);
      toast({ title: 'Menu item created successfully' });
    }
    setIsDialogOpen(false);
  };

  const handleDelete = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
    setDeleteId(null);
    toast({ title: 'Menu item deleted successfully' });
  };

  return (
    <div className="p-6" data-testid="page-menu-management">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Menu Management</h1>
          <p className="text-muted-foreground mt-1">
            Create, edit, and manage your restaurant menu items.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateDialog} data-testid="button-add-menu-item">
              <Plus className="h-4 w-4 mr-2" />
              Add Menu Item
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-serif text-xl">
                {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Dish name" {...field} data-testid="input-menu-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price ($)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.01" placeholder="0.00" {...field} data-testid="input-menu-price" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-menu-category">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map(cat => (
                              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe the dish..." {...field} data-testid="input-menu-description" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/image.jpg" {...field} data-testid="input-menu-image" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-wrap gap-6">
                  <FormField
                    control={form.control}
                    name="isVegetarian"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} data-testid="switch-vegetarian" />
                        </FormControl>
                        <FormLabel className="!mt-0">Vegetarian</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="isSpicy"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} data-testid="switch-spicy" />
                        </FormControl>
                        <FormLabel className="!mt-0">Spicy</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="isGlutenFree"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} data-testid="switch-gluten-free" />
                        </FormControl>
                        <FormLabel className="!mt-0">Gluten-Free</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit" data-testid="button-save-menu-item">
                    {editingItem ? 'Update' : 'Create'} Item
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menuItems.map((item) => (
                <TableRow key={item.id} data-testid={`row-menu-item-${item.id}`}>
                  <TableCell>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <div className="flex gap-1 flex-wrap">
                      {item.isVegetarian && (
                        <Badge variant="secondary" className="gap-1">
                          <Leaf className="h-3 w-3" />
                        </Badge>
                      )}
                      {item.isSpicy && (
                        <Badge variant="secondary" className="gap-1">
                          <Flame className="h-3 w-3" />
                        </Badge>
                      )}
                      {item.isGlutenFree && (
                        <Badge variant="secondary" className="gap-1">
                          <Wheat className="h-3 w-3" />
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => openEditDialog(item)}
                        data-testid={`button-edit-${item.id}`}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Dialog open={deleteId === item.id} onOpenChange={(open) => !open && setDeleteId(null)}>
                        <DialogTrigger asChild>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-destructive"
                            onClick={() => setDeleteId(item.id)}
                            data-testid={`button-delete-${item.id}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Delete Menu Item</DialogTitle>
                          </DialogHeader>
                          <p className="text-muted-foreground">
                            Are you sure you want to delete "{item.name}"? This action cannot be undone.
                          </p>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button
                              variant="destructive"
                              onClick={() => handleDelete(item.id)}
                              data-testid="button-confirm-delete"
                            >
                              Delete
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
