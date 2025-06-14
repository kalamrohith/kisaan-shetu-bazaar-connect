import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartProvider";
import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage";
import LeaseLandPage from "./pages/LeaseLandPage";
import FarmerProfile from "./pages/FarmerProfile";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import AllOffersPage from "./pages/AllOffersPage";
import AllLandListingsPage from "./pages/AllLandListingsPage";
import FarmerDashboard from "./components/FarmerDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/lease-land" element={<LeaseLandPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/all-offers" element={<AllOffersPage />} />
            <Route path="/all-land-listings" element={<AllLandListingsPage />} />
            <Route path="/farmer/:farmerId" element={<FarmerProfile />} />
            <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
