# Style Reference — Clothing Brand Website

## Brand Vibe
Minimalistic. Tech-forward. Premium. Industrial edge with refined execution.
Think: if a tech company made a fashion label.

---

## Color Palette

### Primary
- **Background:** #000000 (Pure Black)
- **Accent:** #0047AB (Cobalt Blue) — loading icon, highlights, CTAs
- **Text Primary:** #FFFFFF (White)
- **Text Secondary:** #A0A0A0 (Muted Gray)

### Supporting
- **Hover States:** #1A1A1A (Soft Black)
- **Borders/Dividers:** #262626 (Dark Gray)
- **Success/Active:** #0047AB (Cobalt Blue)

---

## Typography

### Font Families
- **Headings:** Neue Haas Grotesk, Helvetica Neue, or Inter (tight tracking)
- **Body:** Inter, Suisse Int'l, or SF Pro Display
- **Accent/Nav:** Mono font like JetBrains Mono or Space Mono (optional for tech feel)

### Sizing
- Hero headlines: 64–96px, bold, tight letter-spacing (-0.02em)
- Section titles: 32–48px
- Body text: 16–18px
- Captions/small text: 12–14px

### Style
- All caps for navigation and buttons
- Sentence case for body text
- Minimal use of bold—let whitespace do the work

---

## Loading Screen

### Behavior
- Full-screen black background (#000000)
- Centered loading indicator with cobalt blue (#0047AB)
- Percentage counter: 0% → 100%
- Clean sans-serif font for percentage (Inter or similar)
- Smooth fade-out transition when complete (300-500ms ease)

### Animation Style
- Circular progress ring OR horizontal progress bar
- Smooth, linear animation
- Optional: brand logo fades in at 100%

---

## Layout Principles

### Inspired by:
- **A-Cold-Wall:** Industrial grids, asymmetry, bold product focus
- **Nothing Tech:** Clean cards, generous padding, tech-product presentation
- **Apple Vision Pro:** Scroll-triggered animations, immersive sections, premium feel
- **A24:** Editorial simplicity, strong typography hierarchy
- **Tomorrow Bureau:** Dark backgrounds, video integration, high contrast

### Grid
- 12-column grid with generous gutters
- Max content width: 1440px
- Mobile-first responsive design

### Spacing
- Section padding: 120–160px vertical
- Element gaps: 24–48px
- Card padding: 32–48px

### Whitespace
- Heavy use of negative space
- Let products breathe
- Avoid clutter at all costs

---

## Components

### Navigation
- Fixed/sticky header
- Minimal links (Shop, About, Contact)
- Logo left, links right
- Transparent on scroll, solid on hover/scroll
- Hamburger menu on mobile (animated)

### Buttons
- Primary: Cobalt blue background (#0047AB), white text
- Secondary: Transparent with white border, white text
- All caps, 12–14px, letter-spacing: 0.1em
- Hover: subtle scale (1.02) or background shift
- Border-radius: 0px (sharp) or 4px max

### Cards (Product)
- Dark background (#0A0A0A or #111111)
- Product image dominant
- Minimal text: product name + price
- Hover: subtle lift or border glow

### Images
- High contrast
- Desaturated or monochromatic when appropriate
- Full-bleed hero images
- Lazy loading with fade-in

---

## Animations & Interactions

### Philosophy
- Smooth, intentional, never flashy
- 200–400ms transitions
- Ease-out or custom cubic-bezier curves

### Effects to Use
- Fade in on scroll (staggered)
- Parallax on hero images (subtle)
- Smooth scroll behavior
- Hover lifts on cards (translateY: -4px)
- Text reveal animations on load

### Effects to Avoid
- Bounce effects
- Over-the-top 3D transforms
- Anything that feels "playful" or "fun"

---

## Image Treatment

### Style
- Editorial, high-fashion photography
- Dark, moody lighting
- Clean studio shots for products
- Lifestyle shots: urban, architectural backgrounds

### Technical
- WebP format for performance
- Lazy loading
- Aspect ratios: 4:5 (portrait), 16:9 (landscape), 1:1 (product grid)

---

## Inspiration Reference Summary

| Site | Take This |
|------|-----------|
| A-Cold-Wall | Industrial aesthetic, fashion-forward layout, bold typography |
| Tomorrow Bureau | Dark backgrounds, video heroes, high-end agency feel |
| A24 | Editorial simplicity, clean grids, tasteful minimalism |
| Apple Vision Pro | Scroll animations, immersive sections, premium product presentation |
| Nothing Tech | Tech-product cards, clean UI, modern grid system |
| Active Theory | Experimental interactions, creative transitions |

---

## Pages Needed

1. **Home** — Hero video/image, featured products, brand statement
2. **Shop** — Product grid, filters, quick view
3. **Product Detail** — Large imagery, size selector, add to cart
4. **About** — Brand story, mission, imagery
5. **Contact** — Simple form, location (optional)
6. **Lookbook** (optional) — Editorial image gallery

---

## File Structure Note

```
/assets          ← YOUR brand images, product photos, logo (USE ON SITE)
/inspiration     ← Mood board screenshots (STYLE REFERENCE ONLY — do not use on site)
```

---

## Do's and Don'ts

### Do
- Keep it clean and minimal
- Use generous whitespace
- Make products the hero
- Use smooth, subtle animations
- Maintain consistent spacing

### Don't
- Add unnecessary decorative elements
- Use bright colors outside the palette
- Overcrowd sections
- Use generic stock photos
- Add too many font weights or styles

---

## Final Notes

This website should feel like a premium tech product launch meets high-fashion editorial. Every element should feel intentional. When in doubt, remove rather than add.

The loading screen sets the tone—cobalt blue on black signals: "This is different. This is premium. This is worth waiting for."
