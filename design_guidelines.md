# Design Guidelines: Artisan Builds Carpentry Website

## Design Approach

**Reference-Based Minimalist Approach** drawing inspiration from Apple's restraint, Airbnb's visual storytelling, and Linear's typography precision. This creates a sophisticated canvas that lets the craftsmanship photography take center stage.

## Typography System

**Primary Font Stack:**
- Headings: Inter (weights: 300, 400, 600, 700)
- Body: Inter (weights: 400, 500)
- Accent/Special: Playfair Display (weight: 400) - for select hero headlines only

**Type Scale:**
- Hero Headline: text-5xl md:text-7xl (font-light for elegance)
- Page Headers: text-4xl md:text-5xl (font-normal)
- Section Titles: text-2xl md:text-3xl (font-semibold)
- Card Titles: text-xl md:text-2xl (font-medium)
- Body Large: text-lg (line-height: relaxed)
- Body Standard: text-base (line-height: relaxed)
- Captions: text-sm (font-medium, tracking-wide, uppercase for labels)

## Layout & Spacing System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component internal padding: p-6 to p-8
- Section vertical spacing: py-20 md:py-32
- Container max-widths: max-w-7xl for full layouts, max-w-4xl for content

**Grid Systems:**
- Gallery: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with gap-6 md:gap-8
- Services: grid-cols-1 lg:grid-cols-2 with gap-12
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with gap-8

## Page-Specific Layouts

### Homepage
**Hero Section (80vh):**
- Full-width background image showcasing premium carpentry work
- Centered content overlay with heading + subheading + CTA button with backdrop-blur-md
- Minimal text: Business name in Playfair Display, tagline in Inter

**Introduction Section:**
- Two-column layout (lg:grid-cols-2) with gap-16
- Left: Large body text introducing craftsmanship philosophy
- Right: Supporting image of workshop or artisan at work

**Featured Services Preview:**
- Three-column grid (lg:grid-cols-3) with gap-8
- Each card: Large image, service title, brief description, "Learn More" link
- Cards use subtle elevation (shadow-lg) on hover

**Portfolio Highlight:**
- Masonry-style grid showcasing 6 featured projects
- Staggered heights for visual interest
- "View Full Gallery" CTA centered below

**Testimonials Carousel:**
- Single testimonial displayed at a time with navigation arrows
- Large quote text (text-2xl), customer name, and small photo
- Minimal, centered layout with max-w-3xl

### Services Page
**Header:**
- Full-width hero (60vh) with workshop/tools imagery
- Centered page title overlay

**Service Sections:**
- Each service gets dedicated section with alternating layouts:
  - Odd sections: Image left, content right (lg:grid-cols-2)
  - Even sections: Content left, image right
- Content includes: Service name, detailed description, bullet points of features, "Request Quote" CTA

### Gallery/Portfolio Page
**Filter Navigation:**
- Horizontal tabs/pills for categories (All, Furniture, Cabinetry, Outdoor, Custom)
- Sticky positioning (sticky top-0) for easy access while scrolling

**Gallery Grid:**
- Masonry layout using grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Variable row-span for visual rhythm (some images span-2)
- Lightbox functionality on click
- Hover state: subtle scale transform and overlay with project title

### About Page
**Team Section:**
- Hero image of workshop/team
- Story content in centered max-w-3xl container
- Timeline or process visualization (vertical on mobile, horizontal on desktop)

**Values/Approach:**
- Three-column grid (lg:grid-cols-3) with icon, heading, description per value
- Icons from Heroicons (outline style)

### Contact Page
**Split Layout (lg:grid-cols-2):**
- Left: Contact form with fields for name, email, phone, project type (dropdown), message
- Right: Business information, hours, map embed (aspect-ratio-square or 4/3)

**Form Styling:**
- Input fields: border, rounded-lg, p-4, focus:ring-2
- Labels: text-sm font-medium mb-2
- Submit button: large, prominent, full-width on mobile

## Component Library

**Navigation:**
- Fixed header with backdrop-blur-md
- Logo left, navigation links center, "Get Quote" button right
- Mobile: Hamburger menu with slide-in panel

**Buttons:**
- Primary: Large (px-8 py-4), rounded-lg, font-medium
- Secondary: Border style, matching padding
- Text links: Underline offset with hover transitions

**Cards:**
- Rounded-xl with overflow-hidden for image corners
- Padding p-6 for content areas
- Shadow-sm default, shadow-lg on hover

**Image Treatments:**
- All images: rounded-lg, object-cover
- Gallery images: aspect-ratio-square or aspect-ratio-4/3 for consistency
- Hero images: Subtle overlay (bg-black/20) for text legibility

**Footer:**
- Three-column layout (lg:grid-cols-3): Company info, Quick links, Contact/Social
- Newsletter signup form with email input + subscribe button
- Copyright and links at bottom
- Padding: py-16

## Images

**Required Images:**
- **Hero (Homepage):** High-resolution photo of completed custom furniture piece or kitchen installation, professional lighting, showing fine detail and craftsmanship
- **Introduction Section:** Artisan working with tools in well-lit workshop, focusing on hand details
- **Featured Services (3 images):** Custom furniture piece, kitchen cabinet installation, outdoor deck/structure
- **Portfolio Gallery (12-15 images):** Mix of completed projects - furniture, cabinetry, built-ins, outdoor structures, detail shots
- **Services Page Hero:** Wide shot of organized workshop with tools and materials
- **About Page:** Team photo in workshop environment, authentic and professional
- **Testimonial Photos:** Headshots of 3-5 satisfied customers (circular crop, small size)

**Logo:** Minimalist wordmark "ARTISAN BUILDS" with subtle carpentry tool icon (chisel or plane) incorporated into the 'A' or positioned adjacent

## Animations

**Minimal, Purposeful Motion:**
- Page load: Subtle fade-in for hero content (duration-700)
- Gallery images: Scale on hover (hover:scale-105, transition-transform duration-300)
- Scroll reveals: Fade-in for section content as it enters viewport (intersection observer)
- Navigation: Smooth backdrop blur transition
- NO parallax, NO complex scroll-triggered animations, NO auto-playing carousels

## Accessibility

- All images: Descriptive alt text highlighting craftsmanship details
- Form labels: Properly associated with inputs
- Focus states: Visible ring-2 with offset
- Color contrast: Minimum WCAG AA compliance
- Semantic HTML: Proper heading hierarchy, nav/main/footer landmarks

This design creates a sophisticated, gallery-focused experience that positions Artisan Builds as a premium craftsmanship provider while maintaining modern minimalist aesthetics.