import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface AuthFormProps {
  type: 'signin' | 'signup';
}

export const AuthForm = ({ type }: AuthFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    userType: 'buyer',
    phone: '',
    location: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message
    toast({
      title: type === 'signin' ? 'Signed in successfully!' : 'Account created successfully!',
      description: type === 'signin' 
        ? 'Welcome back to Kisaan Sethu' 
        : 'You can now start using Kisaan Sethu',
    });
    
    console.log('Form submitted:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {type === 'signup' && (
        <>
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="userType">Account Type</Label>
            <Select value={formData.userType} onValueChange={(value) => handleChange('userType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select account type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="farmer">Farmer (Sell Products)</SelectItem>
                <SelectItem value="buyer">Buyer (Purchase Products)</SelectItem>
                <SelectItem value="dealer">Dealer (Bulk Purchase)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              type="text"
              placeholder="City, State"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              required
            />
          </div>
        </>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full">
        {type === 'signin' ? 'Sign In' : 'Create Account'}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        {type === 'signin' ? (
          <>Don't have an account? <button type="button" className="text-primary hover:underline">Sign up here</button></>
        ) : (
          <>Already have an account? <button type="button" className="text-primary hover:underline">Sign in here</button></>
        )}
      </p>
    </form>
  );
};