import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Award, Users, Target } from "lucide-react";
import { workshopImage } from "@/data/content";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description:
        "Every piece we create is built to the highest standards using premium materials and time-tested techniques.",
    },
    {
      icon: Users,
      title: "Client Collaboration",
      description:
        "We work closely with you throughout the process to ensure the final result exceeds your expectations.",
    },
    {
      icon: Target,
      title: "Attention to Detail",
      description:
        "From initial design to final installation, we obsess over every detail to deliver perfection.",
    },
  ];

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
            About Artisan Builds
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Two decades of passion, precision, and exceptional craftsmanship
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-normal mb-8 text-foreground text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Artisan Builds was founded in 2004 with a simple vision: to create exceptional
              custom carpentry that transforms houses into homes. What started as a small
              workshop with a passion for woodworking has grown into a trusted name in premium
              custom carpentry.
            </p>
            <p>
              For over two decades, we've been crafting custom furniture, cabinetry, and
              architectural woodwork for homeowners and businesses who appreciate quality and
              attention to detail. Our team of skilled craftsmen brings together traditional
              techniques passed down through generations with modern design sensibilities and
              precision tools.
            </p>
            <p>
              Every project we undertake is a collaboration. We believe that the best results
              come from listening to our clients, understanding their vision, and applying our
              expertise to bring that vision to life. Whether it's a single custom piece or a
              complete home renovation, we approach each project with the same dedication to
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-6 text-foreground">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center" data-testid={`card-value-${index}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-6 text-foreground">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we ensure quality at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We start by understanding your vision, needs, and budget.",
              },
              {
                step: "02",
                title: "Design",
                description: "Our team creates detailed designs and material selections.",
              },
              {
                step: "03",
                title: "Crafting",
                description: "Skilled craftsmen bring the design to life in our workshop.",
              },
              {
                step: "04",
                title: "Installation",
                description: "Professional installation and final quality inspection.",
              },
            ].map((phase) => (
              <div key={phase.step} className="text-center" data-testid={`process-${phase.step}`}>
                <div className="text-5xl font-serif font-light text-primary mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            Let's Build Something Beautiful Together
          </h2>
          <p className="text-lg md:text-xl mb-12 opacity-90">
            Ready to start your custom carpentry project? Get in touch today.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              data-testid="button-cta-contact"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
