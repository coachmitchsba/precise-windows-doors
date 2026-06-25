# Precise Windows & Doors — Design Brainstorm

## Three Stylistic Approaches

### 1. Crystalline Luxury
**Theme:** High-end architectural glass aesthetic — clean whites, icy blues, and steel accents. Feels like a premium showroom.
**Probability:** 0.04

### 2. Warm Craftsman Modern ← CHOSEN
**Theme:** Warm off-whites, slate navy, and champagne gold. Feels trustworthy, premium, and approachable — like a family business that has mastered its craft over 30 years.
**Probability:** 0.07

### 3. Bold Industrial Edge
**Theme:** Charcoal, concrete textures, and electric orange accents. Edgy and modern but risks alienating homeowners.
**Probability:** 0.03

---

## CHOSEN APPROACH: Warm Craftsman Modern

### Design Movement
Refined American Craftsman meets Contemporary Hospitality Design — the warmth and trust of a 30-year family business elevated with modern editorial typography and motion.

### Core Principles
1. **Light & Airy** — White and warm cream backgrounds, no dark sections except subtle hero overlays
2. **Conversion-First** — Every section ends with a phone CTA or form entry point
3. **Photography-Led** — Large, cinematic images of real windows/doors/homes dominate
4. **Purposeful Motion** — Scroll-triggered reveals, hero slider with parallax, number counters

### Color Philosophy
- **Background:** `#FAFAF8` — warm white (not clinical)
- **Primary Navy:** `#1B3A5C` — the existing brand navy, trustworthy and premium
- **Accent Gold:** `#C9A84C` — champagne gold for CTAs and highlights
- **Light Blue:** `#E8F2FA` — soft sky blue for section backgrounds
- **Text:** `#1A1A2E` dark slate for headings, `#4A5568` for body
- **Footer:** Light warm gray `#F5F4F1` — NOT dark

### Layout Paradigm
- Asymmetric hero with text left + image right (not centered)
- Alternating left/right image-text sections
- Full-bleed image galleries with hover zoom
- Sticky header that transitions from transparent to white on scroll
- Wide sections with generous padding — feels spacious and premium

### Signature Elements
1. **Gold underline accent** on section headings
2. **Diagonal section dividers** (subtle clip-path cuts between sections)
3. **Glass-morphism cards** for service tiles with backdrop blur

### Interaction Philosophy
- Hover states reveal gold borders and subtle lifts
- Hero slider auto-advances with manual dot navigation
- FAQ accordion with smooth height animation
- Form fields with floating labels
- Scroll-triggered fade-up animations on all content blocks

### Animation
- Hero: Ken Burns effect on background images, text slides in from left
- Sections: `opacity: 0 → 1` + `translateY(30px → 0)` on scroll intersection
- Stats: Count-up animation when in viewport
- Gallery: Staggered reveal with 80ms delay per item
- All under 300ms, `cubic-bezier(0.23, 1, 0.32, 1)` easing

### Typography System
- **Display/Headings:** `Playfair Display` — editorial, authoritative, premium
- **Body/UI:** `DM Sans` — clean, modern, highly readable
- **Accent/Labels:** `DM Sans` uppercase with letter-spacing

### Brand Essence
*New York's most trusted window and door craftsmen since 1994 — for homeowners who demand precision.*
**Adjectives:** Trustworthy · Precise · Premium

### Brand Voice
- Headlines: Confident, benefit-forward — "Transform Your Home. Elevate Your Life."
- CTAs: Action-oriented — "Get My Free Estimate" / "Call Now — We Answer"
- No generic filler. Every word earns its place.

### Signature Brand Color
**Navy `#1B3A5C`** — unmistakably Precise Windows & Doors

---

## URL Structure (SEO Preserved)
- `/` — Home
- `/services/` — Services
- `/about-precise/` — About Us
- `/faq/` — FAQ
- `/contact/` — Contact Us
- `/window-careers/` — Careers
- `/terms-of-service` — Terms
- `/privacy-policy` — Privacy Policy
