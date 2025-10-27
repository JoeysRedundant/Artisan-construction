import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-foreground">
              Artisan Builds
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Crafting exceptional custom carpentry with precision, passion, and
              dedication to quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {["Services", "Gallery", "About", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`}>
                    <button
                      data-testid={`footer-link-${item.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Services</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">Custom Furniture</li>
              <li className="text-sm text-muted-foreground">Kitchen Cabinets</li>
              <li className="text-sm text-muted-foreground">Built-In Shelving</li>
              <li className="text-sm text-muted-foreground">Outdoor Structures</li>
              <li className="text-sm text-muted-foreground">Home Renovations</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                  <p className="text-xs text-muted-foreground mt-1">Mon-Fri 8am-6pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@artisanbuilds.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-email"
                >
                  info@artisanbuilds.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  123 Craftsman Ave
                  <br />
                  Portland, OR 97201
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Artisan Builds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
