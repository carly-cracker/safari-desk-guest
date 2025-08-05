import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg">
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-primary/20">404</h1>
          <div className="absolute top-4 left-4">
            <div className="bg-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
              Error!
            </div>
            <div className="text-xs text-muted-foreground mt-1">Page not found</div>
          </div>
          <div className="absolute top-4 right-4">
            <div className="bg-green-200 px-3 py-1 rounded-full text-sm font-medium">
              Oops!
            </div>
            <div className="text-xs text-muted-foreground mt-1">Something went wrong!</div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Sorry! Page not found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          It looks like the page you're looking for doesn't exist or might have been 
          moved. Don't worry, let's get you back on track!
        </p>
        
        <Button asChild>
          <Link to="/">Back to homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
