# Quick Start Guide

## Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

## Key Features Implemented

✅ **Modern Design**
- Glassmorphism cards with backdrop blur
- Soft gradient accents (blue + green)
- Rounded corners and modern typography
- Subtle shadows and depth

✅ **Animations**
- Framer Motion for all animations
- Scroll-triggered section reveals
- Hover micro-interactions
- Floating background blobs
- Smooth transitions

✅ **Responsive Design**
- Mobile-first approach
- Breakpoints: sm, md, lg
- Sticky navbar with mobile menu
- Optimized layouts for all screen sizes

✅ **All Sections Implemented**
1. Hero with highlights and CTAs
2. About SBHC with founder story
3. Vision, Mission & Core Purpose (3 cards)
4. Nature of Business & Industry Overview
5. Problem Statement (Patients vs Hospitals)
6. SBHC Solution
7. Business Model & Personal TPA Role
8. End-to-End Cashless Support
9. Hospital Onboarding & Coordination
10. Patient Services & Ecosystem Value
11. Value for Insurance & Government Schemes
12. Delhi NCR Expansion & Partnership Strategy
13. Differentiators & Competitive Advantages
14. Footer with Contact Us

## Customization Tips

- **Colors**: Edit `tailwind.config.js` → `colors` section
- **Content**: Modify text in `app/page.tsx`
- **Animations**: Adjust delay/duration in Framer Motion props
- **Icons**: Replace Lucide icons in `app/page.tsx`

## Production Build

```bash
npm run build
npm start
```

## Notes

- Contact information (phone/email) uses placeholders - update in Footer section
- All icons are from Lucide React library
- Animations use Framer Motion's `whileInView` for performance
- Smooth scroll is enabled via CSS and Next.js Link behavior
