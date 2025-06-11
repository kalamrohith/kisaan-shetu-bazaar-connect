import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, User, Menu, X, Home, ShoppingCart, MapPin, UserCircle, Phone, LogOut } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AuthForm } from './AuthForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const categories = ['Vegetables', 'Fruits', 'Grains', 'Spices', 'Dairy', 'Others'];
  
  const navigationItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Products', path: '/products', icon: ShoppingCart },
    { name: 'Lease Land', path: '/lease-land', icon: MapPin },
    { name: 'Profile', path: '/profile', icon: UserCircle },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/lovable-uploads/10fed8d7-cb7e-4877-b362-a101d5e94cde.png" 
              alt="Kisaan Sethu Logo" 
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-2xl font-bold text-primary">Kisaan Sethu</h1>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for fresh vegetables, fruits, grains..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button className="ml-2" onClick={handleSearch}>Search</Button>
          </div>

          {/* Auth Buttons & Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Sign In</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Sign In to Kisaan Sethu</DialogTitle>
                    <DialogDescription>
                      Access your farmer dashboard or browse as a buyer
                    </DialogDescription>
                  </DialogHeader>
                  <AuthForm type="signin" />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button>Join as Farmer</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Join Kisaan Sethu</DialogTitle>
                    <DialogDescription>
                      Start selling your fresh produce directly to customers
                    </DialogDescription>
                  </DialogHeader>
                  <AuthForm type="signup" />
                </DialogContent>
              </Dialog>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden md:flex items-center justify-between py-2 border-t border-border">
          <div className="flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
          
          {/* Categories */}
          <div className="flex items-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {/* Mobile Search */}
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center space-x-2 w-full text-left p-2 rounded-md transition-colors hover:bg-accent ${
                    location.pathname === item.path ? 'text-primary bg-accent' : 'text-muted-foreground'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>

            {/* Mobile Categories */}
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary text-left p-2 rounded-md hover:bg-accent transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">Sign In</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Sign In to Kisaan Sethu</DialogTitle>
                    <DialogDescription>
                      Access your farmer dashboard or browse as a buyer
                    </DialogDescription>
                  </DialogHeader>
                  <AuthForm type="signin" />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">Join as Farmer</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Join Kisaan Sethu</DialogTitle>
                    <DialogDescription>
                      Start selling your fresh produce directly to customers
                    </DialogDescription>
                  </DialogHeader>
                  <AuthForm type="signup" />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;