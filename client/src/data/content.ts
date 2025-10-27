import type { Service, Testimonial, GalleryItem } from "@shared/schema";

import heroImage from "@assets/generated_images/Hero_custom_dining_table_f62a8244.png";
import sofaImage from "@assets/generated_images/Custom_furniture_sofa_piece_3ffc374e.png";
import kitchenImage from "@assets/generated_images/Kitchen_cabinets_installation_showcase_fb52c775.png";
import shelvingImage from "@assets/generated_images/Built-in_shelving_unit_3514ce39.png";
import deckImage from "@assets/generated_images/Outdoor_deck_construction_a1ccf1eb.png";
import bathroomImage from "@assets/generated_images/Bathroom_renovation_project_6cd59990.png";
import bookshelfImage from "@assets/generated_images/Custom_bookshelf_gallery_piece_979ec55d.png";
import consoleImage from "@assets/generated_images/Console_table_gallery_item_2bcb43d2.png";
import closetImage from "@assets/generated_images/Closet_organization_system_42c186f5.png";
import bedImage from "@assets/generated_images/Custom_bed_frame_215c2598.png";
import pergolaImage from "@assets/generated_images/Pergola_outdoor_structure_d7735d6f.png";
import islandImage from "@assets/generated_images/Kitchen_island_detail_052c8f2c.png";
import staircaseImage from "@assets/generated_images/Staircase_renovation_project_9ecd4865.png";
import deskImage from "@assets/generated_images/Home_office_desk_built-in_779cd645.png";
import workshopImage from "@assets/generated_images/Professional_workshop_team_photo_1c1e8565.png";
import coffeeTableImage from "@assets/generated_images/Coffee_table_gallery_piece_cb24166f.png";
import testimonial1Image from "@assets/generated_images/Testimonial_customer_headshot_male_0d65c688.png";
import testimonial2Image from "@assets/generated_images/Testimonial_customer_headshot_female_8fff401f.png";
import testimonial3Image from "@assets/generated_images/Testimonial_couple_headshot_024f7a2a.png";
import logoImage from "@assets/generated_images/Artisan_Builds_logo_design_1ee44643.png";

export { heroImage, workshopImage, logoImage };

export const services: Service[] = [
  {
    id: "custom-furniture",
    name: "Custom Furniture",
    description: "Bespoke furniture pieces crafted to your exact specifications",
    features: [
      "Personalized design consultation",
      "Premium hardwood selection",
      "Hand-crafted joinery techniques",
      "Custom finishes and stains",
      "Lifetime craftsmanship guarantee"
    ],
    image: sofaImage,
    detailedDescription: "Our custom furniture service brings your vision to life with meticulous attention to detail. From elegant dining tables to comfortable sofas, each piece is crafted using traditional woodworking techniques combined with modern design sensibilities. We work closely with you to select the perfect materials, finishes, and dimensions that complement your space and lifestyle."
  },
  {
    id: "kitchen-cabinets",
    name: "Kitchen Cabinets",
    description: "Professional kitchen cabinet design and installation",
    features: [
      "Complete kitchen design service",
      "Soft-close hardware included",
      "Multiple finish options",
      "Custom storage solutions",
      "Professional installation"
    ],
    image: kitchenImage,
    detailedDescription: "Transform your kitchen with our custom cabinet solutions. We specialize in creating functional, beautiful kitchens that maximize storage and enhance your cooking experience. Our cabinets feature premium materials, soft-close hardware, and finishes that stand the test of time. From modern minimalist to classic traditional styles, we craft cabinets that reflect your taste and meet your needs."
  },
  {
    id: "built-in-shelving",
    name: "Built-In Shelving",
    description: "Space-maximizing custom storage solutions",
    features: [
      "Floor-to-ceiling designs",
      "Integrated lighting options",
      "Custom configurations",
      "Seamless wall integration",
      "Adjustable shelf systems"
    ],
    image: shelvingImage,
    detailedDescription: "Maximize your space with custom built-in shelving that combines beauty and functionality. Our designs integrate seamlessly with your home's architecture, providing elegant storage solutions for books, media, decorative items, and more. We create everything from home office libraries to entertainment centers, each tailored to your specific needs and style preferences."
  },
  {
    id: "outdoor-structures",
    name: "Decks & Outdoor Structures",
    description: "Beautiful outdoor living spaces built to last",
    features: [
      "Weather-resistant materials",
      "Custom deck design",
      "Pergolas and gazebos",
      "Composite and natural wood options",
      "Professional grade construction"
    ],
    image: deckImage,
    detailedDescription: "Extend your living space outdoors with our custom deck and outdoor structure services. We build durable, beautiful outdoor spaces using premium materials designed to withstand the elements. Whether you envision a spacious deck for entertaining, a cozy pergola for shade, or a complete outdoor living area, we bring exceptional craftsmanship to every project."
  },
  {
    id: "home-renovations",
    name: "Home Renovations",
    description: "Complete carpentry solutions for home improvements",
    features: [
      "Bathroom and bedroom updates",
      "Custom trim and molding",
      "Staircase renovations",
      "Door and window installations",
      "Complete project management"
    ],
    image: bathroomImage,
    detailedDescription: "Refresh and update your home with our comprehensive renovation services. From bathroom vanities to bedroom built-ins, staircase updates to custom trim work, we handle all aspects of carpentry in your renovation project. Our team works efficiently to minimize disruption while delivering results that enhance both the beauty and value of your home."
  }
];

export const galleryItems: GalleryItem[] = [
  { id: "1", title: "Live Edge Dining Table", category: "Custom Furniture", image: heroImage },
  { id: "2", title: "Modern Kitchen Renovation", category: "Kitchen Cabinets", image: kitchenImage },
  { id: "3", title: "Home Office Built-In", category: "Built-In Shelving", image: shelvingImage },
  { id: "4", title: "Composite Deck Installation", category: "Outdoor Structures", image: deckImage },
  { id: "5", title: "Contemporary Sofa", category: "Custom Furniture", image: sofaImage },
  { id: "6", title: "Bathroom Vanity", category: "Home Renovations", image: bathroomImage },
  { id: "7", title: "Geometric Bookshelf", category: "Built-In Shelving", image: bookshelfImage },
  { id: "8", title: "Entryway Console", category: "Custom Furniture", image: consoleImage },
  { id: "9", title: "Walk-In Closet System", category: "Built-In Shelving", image: closetImage },
  { id: "10", title: "Platform Bed Frame", category: "Custom Furniture", image: bedImage },
  { id: "11", title: "Backyard Pergola", category: "Outdoor Structures", image: pergolaImage },
  { id: "12", title: "Kitchen Island", category: "Kitchen Cabinets", image: islandImage },
  { id: "13", title: "Modern Staircase", category: "Home Renovations", image: staircaseImage },
  { id: "14", title: "Custom Office Desk", category: "Built-In Shelving", image: deskImage },
  { id: "15", title: "Mid-Century Coffee Table", category: "Custom Furniture", image: coffeeTableImage }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Michael Anderson",
    role: "Homeowner",
    text: "The custom dining table Artisan Builds created for us is absolutely stunning. The craftsmanship is impeccable, and it's become the centerpiece of our home. Worth every penny!",
    image: testimonial1Image
  },
  {
    id: "2",
    name: "Sarah Mitchell",
    role: "Interior Designer",
    text: "I've worked with Artisan Builds on multiple client projects, and they never disappoint. Their attention to detail and ability to bring designs to life is unmatched. Highly recommended!",
    image: testimonial2Image
  },
  {
    id: "3",
    name: "David & Lisa Thompson",
    role: "Homeowners",
    text: "Our kitchen renovation exceeded all expectations. The custom cabinets are beautiful and functional, and the team was professional throughout the entire process. We couldn't be happier!",
    image: testimonial3Image
  },
  {
    id: "4",
    name: "Robert Chen",
    role: "Business Owner",
    text: "Artisan Builds transformed our office with custom built-in shelving that maximizes our space beautifully. The quality of work is exceptional, and they completed everything on schedule.",
    image: testimonial1Image
  },
  {
    id: "5",
    name: "Jennifer Martinez",
    role: "Homeowner",
    text: "The outdoor deck they built for us has become our favorite place to relax. It's beautifully constructed and has held up perfectly through all seasons. True artisans at work!",
    image: testimonial2Image
  }
];
