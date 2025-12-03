import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '../AdminSidebar';

export default function AdminSidebarExample() {
  return (
    <SidebarProvider>
      <AdminSidebar />
    </SidebarProvider>
  );
}
