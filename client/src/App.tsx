import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import About from "@/pages/About";
import Reviews from "@/pages/Reviews";
import Contact from "@/pages/Contact";
import AdminLoginPage from "@/pages/AdminLoginPage";
import AdminDashboardPage from "@/pages/AdminDashboardPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/about" component={About} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={AdminLoginPage} />
      <Route path="/admin/dashboard" component={AdminDashboardPage} />
      <Route path="/admin/menu" component={AdminDashboardPage} />
      <Route path="/admin/reviews" component={AdminDashboardPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
