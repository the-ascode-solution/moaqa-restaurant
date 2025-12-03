import { useEffect } from 'react';
import { useLocation, Route, Switch } from 'wouter';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/AdminSidebar';
import AdminDashboard from '@/components/AdminDashboard';
import MenuManagement from '@/components/MenuManagement';
import ReviewManagement from '@/components/ReviewManagement';

export default function AdminDashboardPage() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // todo: remove mock functionality - replace with actual auth check
    const isAuth = localStorage.getItem('adminAuth');
    if (!isAuth) {
      setLocation('/admin');
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setLocation('/admin');
  };

  const style = {
    '--sidebar-width': '16rem',
    '--sidebar-width-icon': '3rem',
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex min-h-screen w-full">
        <AdminSidebar onLogout={handleLogout} />
        <div className="flex flex-col flex-1">
          <header className="flex items-center justify-between p-4 border-b border-border">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
          </header>
          <main className="flex-1 overflow-auto bg-background">
            <Switch>
              <Route path="/admin/dashboard">
                <AdminDashboard />
              </Route>
              <Route path="/admin/menu">
                <MenuManagement />
              </Route>
              <Route path="/admin/reviews">
                <ReviewManagement />
              </Route>
              <Route>
                <AdminDashboard />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
