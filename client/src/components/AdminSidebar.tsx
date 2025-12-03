import { Link, useLocation } from 'wouter';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, UtensilsCrossed, MessageSquare, LogOut, Home } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const menuItems = [
  { title: 'Dashboard', url: '/admin/dashboard', icon: LayoutDashboard },
  { title: 'Menu Items', url: '/admin/menu', icon: UtensilsCrossed },
  { title: 'Reviews', url: '/admin/reviews', icon: MessageSquare },
];

interface AdminSidebarProps {
  onLogout?: () => void;
}

export default function AdminSidebar({ onLogout }: AdminSidebarProps) {
  const [location] = useLocation();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      // todo: remove mock functionality
      console.log('Logout clicked');
    }
  };

  return (
    <Sidebar data-testid="admin-sidebar">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between gap-2">
          <span className="font-serif text-xl font-bold text-sidebar-foreground">SpiceHub</span>
          <ThemeToggle />
        </div>
        <span className="text-xs text-muted-foreground">Admin Dashboard</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location === item.url}
                  >
                    <Link href={item.url} data-testid={`link-admin-${item.title.toLowerCase().replace(' ', '-')}`}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-sidebar-border space-y-2">
        <Link href="/">
          <Button variant="outline" className="w-full gap-2" data-testid="button-view-site">
            <Home className="h-4 w-4" />
            View Site
          </Button>
        </Link>
        <Button
          variant="ghost"
          className="w-full gap-2 text-destructive hover:text-destructive"
          onClick={handleLogout}
          data-testid="button-admin-logout"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
