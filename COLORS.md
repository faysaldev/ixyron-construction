# Lxyron Constructive Works — Color & Theme Reference

---

## Primary Palette (Orange / Gold)

| Token                  | HSL Value             | Hex (approx) | Usage                           |
|------------------------|-----------------------|--------------|---------------------------------|
| `--primary`            | `hsl(36, 80%, 50%)`  | `#E69A17`    | Buttons, links, accents, CTA    |
| `--primary-foreground` | `hsl(0, 0%, 100%)`   | `#FFFFFF`    | Text on primary backgrounds     |
| `--accent`             | `hsl(36, 60%, 45%)`  | `#B8841F`    | Hover states, secondary accents |
| `--accent-foreground`  | `hsl(0, 0%, 100%)`   | `#FFFFFF`    | Text on accent backgrounds      |
| `--gold`               | `hsl(36, 80%, 50%)`  | `#E69A17`    | Gold highlights, decorative     |
| `--gold-light`         | `hsl(36, 70%, 65%)`  | `#E8B96A`    | Gradient endpoint, light gold   |
| `--ring`               | `hsl(36, 80%, 50%)`  | `#E69A17`    | Focus rings                     |

## Secondary / Neutral Palette

| Token                    | Light Mode              | Dark Mode                | Usage                  |
|--------------------------|-------------------------|--------------------------|------------------------|
| `--background`           | `hsl(30, 15%, 97%)`    | `hsl(220, 20%, 8%)`     | Page background        |
| `--foreground`           | `hsl(220, 20%, 10%)`   | `hsl(30, 10%, 95%)`     | Primary text           |
| `--card`                 | `hsl(30, 10%, 95%)`    | `hsl(220, 15%, 12%)`    | Card surfaces          |
| `--card-foreground`      | `hsl(220, 20%, 10%)`   | `hsl(30, 10%, 95%)`     | Card text              |
| `--popover`              | `hsl(30, 15%, 97%)`    | `hsl(220, 15%, 12%)`    | Popover/dropdown bg    |
| `--popover-foreground`   | `hsl(220, 20%, 10%)`   | `hsl(30, 10%, 95%)`     | Popover text           |
| `--secondary`            | `hsl(220, 15%, 15%)`   | `hsl(30, 10%, 90%)`     | Dark sections, footer  |
| `--secondary-foreground` | `hsl(30, 15%, 97%)`    | `hsl(220, 20%, 8%)`     | Text on secondary bg   |
| `--muted`                | `hsl(30, 10%, 90%)`    | `hsl(220, 15%, 18%)`    | Muted/disabled bg      |
| `--muted-foreground`     | `hsl(220, 10%, 45%)`   | `hsl(30, 10%, 60%)`     | Subdued text           |
| `--border`               | `hsl(30, 10%, 88%)`    | `hsl(220, 15%, 20%)`    | Borders, dividers      |
| `--input`                | `hsl(30, 10%, 88%)`    | `hsl(220, 15%, 20%)`    | Form input borders     |
| `--destructive`          | `hsl(0, 84.2%, 60.2%)` | `hsl(0, 62.8%, 30.6%)`  | Error/destructive      |

## Custom Tokens

| Token              | Light Mode            | Dark Mode              | Usage                      |
|--------------------|-----------------------|------------------------|----------------------------|
| `--hero-overlay`   | `220 20% 8%`         | `220 20% 4%`           | Hero dark overlay (w/ alpha) |
| `--section-alt`    | `hsl(30, 10%, 93%)`  | `hsl(220, 15%, 10%)`   | Alternating section bg     |
| `--charcoal`       | `hsl(220, 15%, 15%)` | `hsl(220, 15%, 15%)`   | Dark backgrounds           |
| `--charcoal-light` | `hsl(220, 12%, 25%)` | `hsl(220, 12%, 25%)`   | Lighter charcoal           |
| `--warm-white`     | `hsl(30, 15%, 97%)`  | `hsl(30, 10%, 95%)`    | Warm white surfaces        |

## Chart Colors

| Token      | Light Mode              | Dark Mode              |
|------------|-------------------------|------------------------|
| `--chart-1`| `hsl(36, 80%, 50%)`    | `hsl(36, 80%, 50%)`   |
| `--chart-2`| `hsl(220, 15%, 15%)`   | `hsl(30, 10%, 90%)`   |
| `--chart-3`| `hsl(30, 10%, 60%)`    | `hsl(220, 10%, 40%)`  |
| `--chart-4`| `hsl(36, 60%, 65%)`    | `hsl(36, 60%, 65%)`   |
| `--chart-5`| `hsl(220, 10%, 30%)`   | `hsl(220, 15%, 30%)`  |

## Sidebar Colors

| Token                          | Light Mode              | Dark Mode               |
|--------------------------------|-------------------------|-------------------------|
| `--sidebar-background`         | `hsl(220, 15%, 12%)`   | `hsl(220, 20%, 6%)`    |
| `--sidebar-foreground`         | `hsl(30, 10%, 90%)`    | `hsl(30, 10%, 90%)`    |
| `--sidebar-primary`            | `hsl(36, 80%, 50%)`    | `hsl(36, 80%, 50%)`    |
| `--sidebar-primary-foreground` | `hsl(0, 0%, 100%)`     | `hsl(0, 0%, 100%)`     |
| `--sidebar-accent`             | `hsl(220, 15%, 18%)`   | `hsl(220, 15%, 12%)`   |
| `--sidebar-accent-foreground`  | `hsl(30, 10%, 90%)`    | `hsl(30, 10%, 90%)`    |
| `--sidebar-border`             | `hsl(220, 15%, 20%)`   | `hsl(220, 15%, 15%)`   |
| `--sidebar-ring`               | `hsl(36, 80%, 50%)`    | `hsl(36, 80%, 50%)`    |

---

## Typography

| Variable         | Font Family             | Usage               |
|------------------|-------------------------|---------------------|
| `--font-display` | Playfair Display, serif | Headings (h1 - h6) |
| `--font-body`    | DM Sans, sans-serif     | Body text, UI       |

---

## Custom Utility Classes

| Class                | Description                                         |
|----------------------|-----------------------------------------------------|
| `.text-gradient-gold`| Orange-to-gold 135deg gradient text                  |
| `.bg-hero-overlay`   | Dark gradient overlay for hero sections               |
| `.bg-section-dark`   | Charcoal background for dark sections                 |
| `.bg-section-alt`    | Alternate light/dark section background               |
| `.section-padding`   | Standard section padding (`py-20 px-4` / `md:py-28`) |
| `.container-wide`    | Max-width 7xl centered container                      |

---

## App Routes

| Route                    | Page Component   | Description                     |
|--------------------------|------------------|---------------------------------|
| `/`                      | HomePage         | Landing page with hero, stats, services, projects, testimonials |
| `/about`                 | About            | Company story, mission, vision, values, awards |
| `/services`              | Services         | All services listing             |
| `/services/[slug]`       | ServiceDetail    | Individual service detail (dynamic SSG) |
| `/projects`              | Projects         | Portfolio with category filters  |
| `/projects/[slug]`       | ProjectDetail    | Individual project case study (dynamic SSG) |
| `/contact`               | Contact          | Contact form + office info       |
| `/request-quote`         | RequestQuote     | Quote request form               |
| `/careers`               | Careers          | Job openings, internships, application form |
| `/privacy`               | Privacy          | Privacy policy                   |
| `/terms`                 | Terms            | Terms of service                 |
| `not-found`              | NotFound         | Custom 404 page                  |

### Dynamic Route Slugs

**Services:** `construction-management`, `residential-construction`, `commercial-construction`, `interior-design`, `renovation`

**Projects:** `oakwood-family-residence`, `metro-business-center`, `luxe-living-penthouse`, `heritage-kitchen-remodel`, `skyline-office-tower`, `riverside-villas`

---

## Usage Guidelines

1. **Primary orange** (`--primary` / `bg-primary`) is the brand color — used for all CTAs, links, hover states, focus rings, and accent highlights.
2. **Secondary charcoal** (`--secondary` / `bg-secondary`) is for dark section backgrounds: hero overlays, "Why Choose Us", footer, and page header sections.
3. **Card** surfaces use warm off-white (`--card`) to visually separate content from the page background.
4. **Gradient gold** (`.text-gradient-gold`) is reserved for hero headline emphasis only.
5. **Section rhythm**: Alternate between `bg-background` → `bg-section-alt` → `bg-secondary` for visual flow.
6. **Dark mode** keeps the same orange primary for brand consistency; backgrounds shift to dark blue-grays.
7. All Tailwind utilities (`bg-primary`, `text-primary`, `border-primary`, etc.) map to CSS custom properties and auto-switch in dark mode.
