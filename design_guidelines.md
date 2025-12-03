# Design Guidelines: Multi-Cuisine Restaurant SPA

## Design Approach: Reference-Based (Hospitality & Food Service)

Drawing inspiration from **Airbnb** (trust-building, clean layouts), **DoorDash** (menu presentation), and upscale restaurant sites (visual storytelling). This creates an experience-focused design that makes food look irresistible while maintaining professional functionality.

---

## Typography System

**Primary Font**: Inter or Poppins (modern, clean readability)
**Accent Font**: Playfair Display or Cormorant (elegant headings for restaurant name, hero)

**Hierarchy**:
- Hero Headlines: 4xl-6xl (48-60px), accent font, semibold
- Section Headings: 3xl-4xl (36-48px), primary font, bold
- Subsection Titles: xl-2xl (20-24px), primary font, semibold
- Body Text: base-lg (16-18px), primary font, regular
- Menu Item Names: lg-xl, primary font, medium
- Prices: lg-xl, primary font, semibold
- Captions/Labels: sm (14px), primary font, regular

---

## Layout & Spacing System

**Tailwind Units**: Consistently use 4, 6, 8, 12, 16, 20, 24 for spacing (p-4, m-8, gap-6, etc.)

**Container Strategy**:
- Full-width sections: w-full with max-w-7xl centered
- Content areas: max-w-6xl
- Text-heavy sections: max-w-4xl

**Grid Patterns**:
- Menu Items: 1 column mobile, 2 columns tablet (md:), 3-4 columns desktop (lg:)
- Reviews: 1 column mobile, 2 columns tablet, 3 columns desktop
- Admin Dashboard: Single column forms, table layouts for data management

---

## Component Library

### Public-Facing Components

**Navigation Bar**:
- Fixed/sticky header with restaurant logo left, navigation links center/right
- Mobile: Hamburger menu with slide-in drawer
- Transparent overlay on hero, solid background on scroll
- Links: Home, Menu, About, Reviews, Contact
- Height: 16-20 units (64-80px)

**Hero Section** (Home Page):
- Full-width, 80-90vh height
- Large hero image: High-quality food photography (signature dish, restaurant interior, or chef at work)
- Overlay: Dark gradient (top-to-bottom or radial) ensuring text readability
- Centered content: Restaurant name (accent font, very large), tagline, primary CTA button with backdrop blur
- CTA: "View Menu" or "Order Now" - prominent, blurred background

**About Us Section** (Home Page):
- Two-column layout (desktop): Left column with chef/restaurant story text, right column with image
- Single column on mobile, image above text
- Include: Restaurant history, cuisine philosophy, chef's note
- Spacing: py-20 to py-24

**Menu Page**:
- Category tabs/filters at top (e.g., Appetizers, Main Course, Desserts, Beverages)
- Menu item cards in grid layout:
  - Food image (square or 4:3 ratio, prominent)
  - Item name, description (2-3 lines max)
  - Price (right-aligned or bottom)
  - Optional dietary indicators (icons: vegetarian, gluten-free, spicy)
- Card design: Clean borders or subtle shadows, hover elevation effect
- Spacing between cards: gap-6 to gap-8

**Reviews Page**:
- Review submission form at top or bottom:
  - Fields: Name, Email, Rating (star selector), Review Text
  - Submit button
  - Note: "Reviews are subject to approval"
- Approved reviews display in card grid:
  - Star rating visualization
  - Review text (truncate long reviews with "Read more")
  - Reviewer name, date
  - Subtle card styling with borders

**Contact Page**:
- Two-column split (desktop): Contact form left, information right
- Form fields: Name, Email, Phone, Message
- Information panel: Address, phone, email, hours of operation, embedded map placeholder
- Social media icons

**Footer**:
- Three-column layout: Restaurant info (address, phone), Quick links (Menu, About, Contact), Social media & newsletter signup
- Copyright notice at bottom
- Spacing: py-12 to py-16

### Admin Dashboard Components

**Authentication**:
- Centered login card on dedicated page
- Fields: Username/Email, Password
- Simple, clean form design
- No distracting imagery, focus on security

**Dashboard Layout**:
- Sidebar navigation (left): Dashboard Home, Menu Management, Review Management, Logout
- Main content area (right): Tables, forms, action buttons
- Breadcrumb navigation at top of content area

**Menu Management Interface**:
- Data table displaying all menu items with columns: Image thumbnail, Name, Category, Price, Actions (Edit, Delete)
- "Add New Item" button (prominent, top-right)
- Create/Edit form: Fields for Name, Category dropdown, Description textarea, Price, Image URL
- Form spacing: gap-4 between fields, p-6 container padding

**Review Management Interface**:
- Data table: Reviewer Name, Rating, Review Text (truncated), Status (Visible/Hidden), Date, Actions
- Toggle visibility button for each review (prominent visual state change)
- Filter tabs: All Reviews, Visible, Hidden
- Compact row design for scanning many reviews

---

## Interaction Patterns

- **Hover States**: Menu item cards lift slightly (shadow increase), buttons darken/lighten
- **Loading States**: Skeleton screens for menu items and reviews while data fetches
- **Animations**: Minimal - smooth page transitions, subtle card hover effects
- **Form Validation**: Inline error messages below fields, red borders on invalid inputs
- **Success Feedback**: Toast notifications for admin actions, success messages for review submissions

---

## Images

**Hero Image**: Full-width, high-quality photograph - restaurant's signature dish plated beautifully, or warm interior shot with ambient lighting. Image should evoke appetite and ambiance.

**Menu Item Images**: Square or 4:3 ratio photographs of each dish. Professional food photography with good lighting, garnished plating. Images should be consistent in style and quality.

**About Section Images**: Restaurant interior, chef portrait, kitchen in action, or team photo. Authentic, warm imagery that builds trust.

**Image Treatment**: All images optimized for web, use object-fit: cover for consistent sizing, lazy loading for performance.

---

## Responsive Behavior

- **Mobile (< 768px)**: Single column layouts, stacked navigation, full-width cards, larger touch targets (min 44px)
- **Tablet (768px - 1024px)**: 2-column grids, balanced layouts
- **Desktop (> 1024px)**: 3-4 column grids, full multi-column layouts, sidebars visible

Admin dashboard remains functional on tablet but optimized for desktop use.