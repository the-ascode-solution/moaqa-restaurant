# Moaqa Restaurant - Multi-Cuisine Restaurant SPA

A modern, full-stack Single Page Application (SPA) for a multi-cuisine restaurant featuring a public-facing website and an admin dashboard for managing menus and reviews.

## 📋 Project Overview

Moaqa Restaurant is built with a focus on providing an exceptional user experience for customers and seamless management tools for administrators. The application includes:

- **Public-Facing Website**: Browse menu, read reviews, contact restaurant, and learn about the restaurant
- **Admin Dashboard**: Manage menu items, reviews, and restaurant content with authentication
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Modern Tech Stack**: Built with React, TypeScript, Tailwind CSS, and Express.js

## 🎨 Design Philosophy

The design approach draws inspiration from:
- **Airbnb**: Trust-building and clean layouts
- **DoorDash**: Intuitive menu presentation
- **Upscale Restaurant Websites**: Visual storytelling and experience-focused design

This creates an experience-focused interface that makes food look irresistible while maintaining professional functionality.

## 🏗️ Project Structure

```
moaqa-restaurant/
├── client/                          # Frontend React application
│   ├── index.html                  # Entry point
│   ├── src/
│   │   ├── App.tsx                 # Main app component
│   │   ├── main.tsx                # React entry point
│   │   ├── index.css               # Global styles
│   │   ├── components/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── AdminLogin.tsx
│   │   │   ├── AdminSidebar.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── MenuItemCard.tsx
│   │   │   ├── MenuManagement.tsx
│   │   │   ├── MenuSection.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ReviewCard.tsx
│   │   │   ├── ReviewForm.tsx
│   │   │   ├── ReviewManagement.tsx
│   │   │   ├── ReviewsSection.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── ui/                 # Shadcn/ui component library
│   │   │   └── examples/           # Example component implementations
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   ├── queryClient.ts
│   │   │   └── utils.ts
│   │   └── pages/
│   │       ├── Home.tsx
│   │       ├── Menu.tsx
│   │       ├── About.tsx
│   │       ├── Reviews.tsx
│   │       ├── Contact.tsx
│   │       ├── AdminLoginPage.tsx
│   │       ├── AdminDashboardPage.tsx
│   │       └── not-found.tsx
│   └── public/                     # Static assets
├── server/                          # Backend Express server
│   ├── index.ts                    # Server entry point
│   ├── db.ts                       # Database configuration
│   ├── routes.ts                   # API routes
│   ├── static.ts                   # Static file serving
│   ├── storage.ts                  # File storage utilities
│   └── vite.ts                     # Vite integration
├── shared/                          # Shared code between client and server
│   └── schema.ts                   # Data schemas and types
├── script/                          # Build scripts
│   └── build.ts
├── attached_assets/                # Generated assets and images
│   └── generated_images/
├── Configuration Files
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   ├── drizzle.config.ts
│   ├── components.json
│   └── design_guidelines.md
```

## 🛠️ Technology Stack

### Frontend
- **React 18.3**: UI library
- **TypeScript 5.6**: Type safety
- **Tailwind CSS 3.4**: Utility-first styling
- **Vite 5.4**: Fast build tool and dev server
- **Shadcn/ui**: Radix UI + Tailwind component library
- **React Router (Wouter)**: Client-side routing
- **React Hook Form**: Form state management
- **TanStack React Query**: Data fetching and caching
- **Framer Motion**: Animations
- **Recharts**: Data visualization

### Backend
- **Express 4.21**: Web server framework
- **Node.js**: Runtime environment
- **Drizzle ORM**: Type-safe ORM
- **PostgreSQL (Neon)**: Database
- **Passport.js**: Authentication

### Development Tools
- **TypeScript**: Static type checking
- **TSX**: TypeScript execution
- **Tailwind CSS Vite Plugin**: CSS processing
- **PostCSS**: CSS transformation
- **Drizzle Kit**: Database migrations

## 📦 Key Dependencies

### UI & Components
- `@radix-ui/*`: Accessible component primitives
- `recharts`: Chart library
- `lucide-react`: Icon library
- `react-icons`: Additional icon library
- `embla-carousel-react`: Carousel functionality

### State & Data Management
- `@tanstack/react-query`: Server state management
- `zod`: Schema validation
- `drizzle-zod`: Zod integration with Drizzle ORM

### Authentication & Sessions
- `passport`: Authentication middleware
- `passport-local`: Local authentication strategy
- `express-session`: Session management
- `connect-pg-simple`: PostgreSQL session store
- `bcryptjs`: Password hashing

### Utilities
- `date-fns`: Date utilities
- `next-themes`: Theme switching
- `framer-motion`: Animation library
- `react-resizable-panels`: Resizable panel layouts
- `vaul`: Drawer component
- `ws`: WebSocket support

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- PostgreSQL database (or Neon serverless)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/the-ascode-solution/moaqa-restaurant.git
   cd moaqa-restaurant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` or `.env.local` file with:
   ```
   DATABASE_URL=your_database_url
   NODE_ENV=development
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

## 🎯 Build & Development Commands

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement (HMR). Runs on `localhost:3000` (or configured port).

### Production Build
```bash
npm run build
```
Creates an optimized production build. Bundles:
- Client-side React app
- Server code
- All assets

Output goes to `dist/` directory.

### Start Production Server
```bash
npm start
```
Runs the production build. Requires `npm run build` to be executed first.

### Type Checking
```bash
npm run check
```
Runs TypeScript compiler to check for type errors throughout the codebase.

### Database Migrations
```bash
npm run db:push
```
Pushes database schema changes using Drizzle Kit.

## 📁 Assets

Project assets are located in:
- **`attached_assets/`**: General project assets
- **`attached_assets/generated_images/`**: Generated or processed images
- **`client/public/`**: Static files served by the web server

## 🎨 Key Features

### Public Pages
- **Home**: Hero section with CTA, menu preview, reviews showcase
- **Menu**: Full menu with categories, descriptions, prices, and dietary indicators
- **About**: Restaurant story, philosophy, and team information
- **Reviews**: User reviews with ratings and filtering
- **Contact**: Contact form and location information

### Admin Features
- **Dashboard**: Overview and management tools
- **Menu Management**: Add, edit, delete menu items with images
- **Review Management**: Approve/hide customer reviews
- **Authentication**: Secure login system

## 🎨 Design System

See `design_guidelines.md` for detailed:
- Typography system (Inter/Poppins for body, Playfair Display/Cormorant for headings)
- Layout and spacing conventions (Tailwind-based)
- Component specifications
- Responsive breakpoints
- Interaction patterns

## 🔐 Authentication

The admin dashboard uses:
- Passport.js for authentication
- Local strategy (username/password)
- Session-based authentication with PostgreSQL store
- Password hashing with bcryptjs

## 🗄️ Database

Uses **Drizzle ORM** with PostgreSQL:
- Type-safe database queries
- Automatic schema management
- Support for migrations via Drizzle Kit

Configuration: `drizzle.config.ts`

## 🎯 Component Library

The project includes a comprehensive UI component library built with Shadcn/ui components:
- Accordion, Alert, Avatar, Badge
- Button, Card, Carousel, Checkbox
- Dialog, Drawer, Dropdown Menu, Form
- Input, Label, Menu Bar, Navigation Menu
- Pagination, Popover, Progress, Radio Group
- Select, Separator, Sheet, Sidebar
- Slider, Switch, Table, Tabs, Toast
- And many more...

See `client/src/components/ui/` for all available components.

## 🔄 Project Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm run check` | Type check entire project |
| `npm run db:push` | Push database migrations |

## 📝 Configuration Files

- **`vite.config.ts`**: Vite bundler and dev server configuration
- **`tailwind.config.ts`**: Tailwind CSS customization
- **`tsconfig.json`**: TypeScript compiler options
- **`postcss.config.js`**: PostCSS processing
- **`drizzle.config.ts`**: Drizzle ORM configuration
- **`components.json`**: Shadcn/ui component registry

## 🌐 Responsive Design

Breakpoints (Tailwind defaults):
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with appropriate layout adjustments for each breakpoint.

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your hosting provider

3. Set environment variables on your hosting platform

4. Run:
   ```bash
   npm start
   ```

## 📄 License

MIT - See LICENSE file for details

## 👥 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For issues or questions about the project, please open an issue on GitHub.

---

**Moaqa Restaurant** © 2025 - Built with ❤️ for an exceptional dining experience
