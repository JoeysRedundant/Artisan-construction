import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1
            className="text-5xl md:text-6xl font-normal mb-6 text-foreground"
            data-testid="text-page-title"
          >
            Client Testimonials
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Don't just take our word for it—hear what our clients have to say
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-20 md:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="p-8 flex flex-col"
                data-testid={`testimonial-${testimonial.id}`}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-8 flex-grow italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { number: "20+", label: "Years of Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-serif font-light text-primary mb-3" data-testid={`stat-number-${index}`}>
                  {stat.number}
                </div>
                <p className="text-lg text-muted-foreground" data-testid={`stat-label-${index}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
