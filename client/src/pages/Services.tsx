import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services, workshopImage } from "@/data/content";

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${workshopImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1
            className="font-serif text-5xl md:text-6xl font-light mb-6"
            data-testid="text-page-title"
          >
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Comprehensive carpentry solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <div className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-4">
                  <span className="text-sm font-medium tracking-wide uppercase text-primary">
                    {service.id.replace("-", " ")}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                  {service.name}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.detailedDescription}
                </p>
                
                <div className="mb-8">
                  <h3 className="font-semibold text-lg mb-4 text-foreground">
                    What's Included:
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact">
                  <Button
                    data-testid={`button-quote-${service.id}`}
                  >
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <Card className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-auto object-cover"
                    data-testid={`img-service-${service.id}`}
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-foreground">
            Don't See What You Need?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            We offer custom solutions for unique projects. Get in touch to discuss your
            specific requirements.
          </p>
          <Link href="/contact">
            <Button variant="default" data-testid="button-custom-project">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
