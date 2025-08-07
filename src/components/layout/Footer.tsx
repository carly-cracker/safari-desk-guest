import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <img src="https://i.ibb.co/WNL0yvvz/grn-01.png" alt="" />
              </div>
              <span className="font-semibold text-xl">SafariDesk</span>
            </div>
            <p className="text-gray-300 text-sm">
              Streamline your workflow, manage projects, and empower your team.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white text-sm">Home</Link>
              <Link to="/features" className="block text-gray-300 hover:text-white text-sm">Features</Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-white text-sm">Pricing</Link>
              <Link to="/blog" className="block text-gray-300 hover:text-white text-sm">Blog</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white text-sm">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white text-sm">About Us</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white text-sm">Contact Us</Link>
              <Link to="/terms" className="block text-gray-300 hover:text-white text-sm">Terms</Link>
              <Link to="/privacy" className="block text-gray-300 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/career" className="block text-gray-300 hover:text-white text-sm">Career</Link>
              <Link to="/404" className="block text-gray-300 hover:text-white text-sm">404 Page</Link>
              <Link to="/blog" className="block text-gray-300 hover:text-white text-sm">Blog</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stay updated with our latest news and tips!</h3>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-slate-800 border-slate-700 text-white"
              />
              <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-sm">© 2024 SafariDesk, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;