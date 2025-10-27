import { useState } from "react";
import { Button } from "@/components/ui/button";
import { galleryItems } from "@/data/content";

const categories = [
  "All",
  "Custom Furniture",
  "Kitchen Cabinets",
  "Built-In Shelving",
  "Outdoor Structures",
  "Home Renovations"
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="text-5xl md:text-6xl font-normal mb-6 text-foreground"
            data-testid="text-page-title"
          >
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our collection of custom carpentry projects
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap flex-shrink-0"
                data-testid={`filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredItems.map((item) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-semibold text-lg mb-1">
                        {item.title}
                      </p>
                      <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-6 text-foreground">
            Every Project Tells a Story
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Each piece we create is a unique collaboration between our craftsmen and our
            clients. From initial concept to final installation, we ensure every detail
            reflects your vision and our commitment to excellence.
          </p>
        </div>
      </section>
    </div>
  );
}
