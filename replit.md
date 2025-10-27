# Artisan Builds - Premium Carpentry Website

## Project Overview
A modern, minimalist multi-page website for Artisan Builds, a premium custom carpentry business. The site showcases exceptional craftsmanship through high-quality visuals, detailed service information, and an elegant user experience.

## Business Information
- **Business Name**: Artisan Builds
- **Industry**: Custom Carpentry & Woodworking
- **Target Audience**: Homeowners, contractors, and individuals seeking premium custom carpentry services
- **Brand Style**: Modern minimalist with emphasis on craftsmanship and quality

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Express.js, Node.js
- **Data Storage**: In-memory storage (MemStorage)
- **Routing**: Wouter
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query (React Query)

## Pages & Features

### 1. Homepage (`/`)
- Hero section with full-width background image and call-to-action buttons
- Introduction section with company philosophy and key features
- Featured services preview (3 services)
- Portfolio highlights (6 gallery items)
- Client testimonial showcase
- Final CTA section

### 2. Services (`/services`)
- Hero section with workshop imagery
- Detailed service sections with alternating layouts
- Five main services:
  - Custom Furniture
  - Kitchen Cabinets
  - Built-In Shelving
  - Decks & Outdoor Structures
  - Home Renovations
- Each service includes description, features, and imagery
- Quote request CTAs throughout

### 3. Gallery (`/gallery`)
- Filterable portfolio grid
- 15 high-quality project images
- Categories: All, Custom Furniture, Kitchen Cabinets, Built-In Shelving, Outdoor Structures, Home Renovations
- Hover effects with project titles and categories
- Responsive masonry-style grid

### 4. About (`/about`)
- Company story and history (20+ years experience)
- Core values section with icons
- 4-step process overview (Consultation, Design, Crafting, Installation)
- Workshop imagery
- Mission and vision statements

### 5. Testimonials (`/testimonials`)
- Grid layout of 5 client testimonials
- Each testimonial includes customer name, role, photo, and 5-star rating
- Statistics section (Years of Experience, Projects Completed, Client Satisfaction)

### 6. Contact (`/contact`)
- Functional contact form with validation
- Form fields: Name, Email, Phone, Project Type, Message
- Contact information display (Phone, Email, Address, Hours)
- Map placeholder
- Form submission to backend API

## Design System

### Typography
- **Primary Font**: Inter (300, 400, 500, 600, 700)
- **Accent Font**: Playfair Display (for hero headlines)
- Hierarchy: Hero (5xl-7xl), Page Headers (4xl-5xl), Section Titles (2xl-3xl), Body (base-lg)

### Color Palette
- **Primary**: Orange/Amber (HSL: 24 100% 50%)
- **Background**: Soft whites (Light: 0 0% 100%, Dark: 0 0% 7%)
- **Card**: Elevated background (Light: 0 0% 98%, Dark: 0 0% 9%)
- **Muted**: Warm grays for secondary text
- Modern minimalist approach with light colors and excellent contrast

### Spacing
- Consistent spacing system using Tailwind units
- Section padding: py-20 md:py-32
- Card padding: p-6 to p-8
- Content max-width: max-w-7xl (full layouts), max-w-4xl (content)

### Components
- Shadcn UI components throughout
- Custom hover and active states using elevation utilities
- Responsive navigation with mobile menu
- Consistent card designs across all pages

## API Endpoints

### POST `/api/contact`
Submit contact form
- **Body**: `{ name, email, phone, projectType, message }`
- **Validation**: Zod schema validation
- **Response**: Created contact object
- **Error Handling**: 400 for validation errors, 500 for server errors

### GET `/api/contacts`
Retrieve all contact submissions (for testing/admin)
- **Response**: Array of contact objects

## Generated Assets
All imagery generated using AI image generation:
- 1 hero image (custom dining table)
- 5 service images (furniture, kitchen, shelving, deck, bathroom)
- 10 gallery portfolio images
- 1 workshop/team image
- 3 testimonial customer photos
- 1 logo design

## Data Models

### Contact
```typescript
{
  id: string;
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
  createdAt: string;
}
```

### Service (Static Data)
```typescript
{
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  detailedDescription: string;
}
```

### Gallery Item (Static Data)
```typescript
{
  id: string;
  title: string;
  category: string;
  image: string;
}
```

### Testimonial (Static Data)
```typescript
{
  id: string;
  name: string;
  text: string;
  role: string;
  image: string;
}
```

## Key Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Accessible navigation with keyboard support
- ✅ SEO optimized (meta tags, Open Graph)
- ✅ Form validation with user-friendly error messages
- ✅ Loading states for async operations
- ✅ Beautiful empty and error states
- ✅ Consistent design language throughout
- ✅ Performance optimized images

## Development Commands
- `npm run dev` - Start development server
- Frontend: Vite dev server
- Backend: Express server with hot reload

## Project Structure
```
client/
  src/
    components/
      layout/        # Header, Footer
      ui/           # Shadcn UI components
    data/           # Static content (services, testimonials, gallery)
    pages/          # Page components
    lib/            # Query client, utilities
server/
  routes.ts         # API routes
  storage.ts        # In-memory data storage
shared/
  schema.ts         # Shared TypeScript types and Zod schemas
```

## Future Enhancements
- Admin dashboard for managing contacts
- Project cost estimation calculator
- Before/after image sliders
- Blog section for carpentry tips
- Customer portal for project tracking
- Integration with calendar for consultations
- Email notifications for contact submissions
