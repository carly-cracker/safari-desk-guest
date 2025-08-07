import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <img src="https://res-console.cloudinary.com/dir0qfbpu/thumbnails/v1/image/upload/v1754487823/Z3JuLTAxX2ZrZnRsYw==/drilldown" alt="" />
          </div>
          <span className="font-semibold text-xl">SafariDesk</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/features') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Features
          </Link>
          <Link 
            to="/pricing" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/pricing') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Pricing
          </Link>
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`px-4 py-2 rounded-xl text-sm font-medium flex items-center space-x-1 transition-all duration-300 hover:scale-105 ${
                  isActive("/blog") || isActive("/case-study") || isActive("/integration") || isActive("/changelog")
                    ? "bg-white/40 text-blue-700 shadow-lg backdrop-blur-sm"
                    : "text-gray-700 hover:bg-white/30 hover:text-gray-900 hover:backdrop-blur-sm"
                }`}>
                  <span>Resources</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-52 bg-white/90 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-2 mt-2">
                <DropdownMenuItem asChild>
                  <Link to="/blog" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-white/50 rounded-xl transition-all duration-200">
                    📝 Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/case-study" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-white/50 rounded-xl transition-all duration-200">
                    📊 Case Studies
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/integration" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-white/50 rounded-xl transition-all duration-200">
                    🔗 Integrations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/changelog" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-white/50 rounded-xl transition-all duration-200">
                    🆕 What's New
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          <Link 
            to="/contact" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/contact') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Contacts
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Start Your Free Trial</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;