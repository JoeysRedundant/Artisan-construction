import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { heroImage, services, galleryItems, testimonials } from "@/data/content";

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const featuredGallery = galleryItems.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1
            className="font-serif text-5xl md:text-7xl font-light mb-6 leading-tight"
            data-testid="text-hero-title"
          >
            Craftsmanship That Elevates Your Space
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Premium custom carpentry and woodworking services for discerning homeowners
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                data-testid="button-hero-quote"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-white/20 text-white"
                data-testid="button-hero-gallery"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-normal mb-8 text-foreground">
                Where Tradition Meets Modern Design
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Artisan Builds, we believe that exceptional carpentry is more than just
                construction—it's an art form. With over 20 years of experience, we blend
                time-honored woodworking techniques with contemporary design to create pieces
                that are as functional as they are beautiful.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every project we undertake is a collaboration, ensuring that the final result
                not only meets but exceeds your expectations. From custom furniture to complete
                home renovations, we bring precision, passion, and uncompromising quality to
                every detail.
              </p>
              <div className="space-y-3">
                {[
                  "Premium materials and sustainable sourcing",
                  "Expert craftsmanship with attention to detail",
                  "Personalized design consultation",
                  "Lifetime craftsmanship guarantee"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground" data-testid={`feature-${index}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={featuredGallery[3].image}
                alt="Craftsmanship detail"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-6 text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From custom furniture to complete renovations, we deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer"
                data-testid={`card-service-${service.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link href="/services">
                    <Button 
                      variant="ghost" 
                      className="px-0 hover:bg-transparent"
                      data-testid={`button-learn-more-${service.id}`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg" data-testid="button-all-services">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-6 text-foreground">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our craftsmanship and attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover-elevate active-elevate-2 transition-all"
                data-testid={`gallery-item-${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium text-lg">{item.title}</p>
                    <p className="text-white/80 text-sm mt-1">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button variant="default" size="lg" data-testid="button-full-gallery">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-6 text-foreground">
              What Our Clients Say
            </h2>
          </div>

          <div className="relative">
            <Card className="p-8 md:p-12">
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 text-center italic">
                "{testimonials[0].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[0].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[0].role}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button variant="outline" size="lg" data-testid="button-all-testimonials">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl mb-12 opacity-90">
            Let's bring your vision to life with exceptional craftsmanship
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              data-testid="button-cta-contact"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
