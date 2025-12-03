import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UtensilsCrossed, MessageSquare, Eye, EyeOff, TrendingUp } from 'lucide-react';

// todo: remove mock functionality
const mockStats = {
  totalMenuItems: 24,
  totalReviews: 156,
  visibleReviews: 142,
  pendingReviews: 14,
  averageRating: 4.7,
};

interface AdminDashboardProps {
  stats?: typeof mockStats;
}

export default function AdminDashboard({ stats = mockStats }: AdminDashboardProps) {
  return (
    <div className="p-6" data-testid="page-admin-dashboard">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here is an overview of your restaurant.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-4 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Menu Items
            </CardTitle>
            <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.totalMenuItems}</div>
            <p className="text-xs text-muted-foreground mt-1">Active dishes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-4 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Reviews
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.totalReviews}</div>
            <p className="text-xs text-muted-foreground mt-1">All time submissions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-4 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Visible Reviews
            </CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.visibleReviews}</div>
            <p className="text-xs text-muted-foreground mt-1">Published on site</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-4 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Reviews
            </CardTitle>
            <EyeOff className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.pendingReviews}</div>
            <p className="text-xs text-muted-foreground mt-1">Awaiting approval</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <CardTitle className="font-serif text-xl">Performance Overview</CardTitle>
            <TrendingUp className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8">
              <div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
                <p className="text-3xl font-bold text-primary">{stats.averageRating}</p>
                <p className="text-xs text-muted-foreground">out of 5 stars</p>
              </div>
              <div className="h-16 w-px bg-border" />
              <div>
                <p className="text-sm text-muted-foreground">Review Approval Rate</p>
                <p className="text-3xl font-bold text-foreground">
                  {Math.round((stats.visibleReviews / stats.totalReviews) * 100)}%
                </p>
                <p className="text-xs text-muted-foreground">of all reviews</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
