# Swasth Bharat Healthcare (SBHC) Website

A modern, premium single-page website for Swasth Bharat Healthcare - Professional Healthcare Consultancy & Personal TPA Support service in India.

## Features

- 🎨 Modern premium healthcare design with glassmorphism effects
- ✨ Smooth scroll single-page navigation
- 🎭 Animation-heavy with Framer Motion
- 📱 Mobile-first responsive design
- 🎯 Sticky navbar with section links
- 🌊 Floating background blobs with subtle gradients
- 💫 Micro-interactions and scroll animations
- 🎪 Section reveal animations on scroll

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Sticky navigation bar
│   ├── SectionWrapper.tsx  # Reusable section wrapper with animations
│   ├── FloatingBlobs.tsx   # Animated background blobs
│   └── AnimatedCounter.tsx # Counter animation component
└── public/                 # Static assets
```

## Sections

1. **Hero** - Company introduction with highlights and CTAs
2. **About SBHC** - Company story and founder information
3. **Vision, Mission & Core Purpose** - Three-card layout
4. **Nature of Business** - Industry overview
5. **Problem Statement** - Patients vs Hospitals pain points
6. **SBHC Solution** - Value proposition
7. **Business Model** - Workflow and coordination model
8. **End-to-End Cashless Support** - Services list
9. **Hospital Onboarding** - Process and benefits
10. **Patient Services** - Service list with Patient Promise badges
11. **Value for Insurance** - Five icon cards
12. **Delhi NCR Expansion** - Partnership strategy
13. **Differentiators** - Competitive advantages
14. **Footer** - Contact information and brand closing

## Design Features

- Glassmorphism cards with backdrop blur
- Soft gradient accents (primary blue + healthcare green)
- Rounded corners throughout
- Modern typography with Inter font
- Subtle shadows and depth
- Smooth scroll behavior
- Hover micro-interactions
- Scroll-triggered animations

## Customization

- Colors: Edit `tailwind.config.js` to modify color scheme
- Content: Update sections in `app/page.tsx`
- Animations: Adjust Framer Motion settings in components
- Styling: Modify Tailwind classes or add custom CSS in `globals.css`

## License

Private project for Swasth Bharat Healthcare.
