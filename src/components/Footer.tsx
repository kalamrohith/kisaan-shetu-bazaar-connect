const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">K</span>
              </div>
              <h3 className="text-xl font-bold">Kisaan Sethu</h3>
            </div>
            <p className="text-sm opacity-90">
              Connecting farmers directly with buyers. Fresh produce, fair prices, 
              and sustainable farming for a better tomorrow.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <span className="text-sm">📘</span>
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <span className="text-sm">📧</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Products</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Categories</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Offers</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Become a Farmer</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Help Center</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Shipping Info</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Return Policy</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start space-x-2">
                <span>📍</span>
                <span>123 Agricultural Hub,<br />Farm Street, Rural City 560001</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>support@kisaansethu.com</span>
              </div>
              <div className="pt-3 border-t border-primary-foreground/20">
                <a 
                  href="https://www.instagram.com/KISAANSETHU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:opacity-100 transition-opacity"
                >
                  <span>📷</span>
                  <span>Follow us on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm opacity-90">
            © 2024 Kisaan Sethu. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm opacity-90">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">About Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;