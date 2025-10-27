import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-8xl md:text-9xl font-serif font-light text-primary mb-6">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">
          Page Not Found
        </h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg" data-testid="button-home">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
