# Gunakar Pyla — Portfolio

A cinematic, animation-rich portfolio for **Gunakar Pyla**, Network & Security Engineer.  
Built with **React + Vite + TailwindCSS**, using Framer Motion, AOS.js, and Swiper.js.

---

## 🚀 Tech Stack

- React + Vite  
- TailwindCSS (Dark theme with custom color palette)  
- Framer Motion (micro-interactions)  
- AOS.js (scroll animations)  
- Swiper.js (project carousel)  
- React Type Animation (typewriter effect)
- React CountUp (animated counters)
- Lucide Icons, react-scroll

---

## 🌈 Design System

- **Color Palette:** Charcoal `#0B0F19`, Silver `#E4E4E7`, Electric Green `#22C55E`, Violet `#7C3AED`  
- No blue / gold tones.  
- **Typography:**  
  - Headlines → Poppins ExtraBold  
  - Body → Inter Regular

- Style: glassmorphism, angled gradients, parallax backgrounds, sticky animated header.

---

## 🧭 Site Map

1. Header (Sticky)
2. Hero
3. About
4. Skills
5. Experience (Timeline)
6. Projects (Swiper Carousel)
7. Education
8. Certifications
9. Contact
10. Footer

---

## 📄 Content Customization

All textual content is taken directly from **Gunakar Pyla's resume**, including professional summary, technical skills, experience, projects, education, and certifications.

---

## 🛠️ Setup & Development

```bash
# 1. Clone repository
git clone <repo-url>
cd gunakar-pyla-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open http://localhost:8080 in your browser.

---

## 📁 Assets

Replace `/public/assets/profile.jpg` with your profile photo.

Replace `/public/assets/resume.pdf` with your actual resume file.

Update project images inside `/public/assets/projects/`.

---

## 🌐 Deployment

This project is Vite-based and can be deployed to Vercel, Netlify, GitHub Pages, or any static hosting.

---

## ✨ Features

- **Preloader**: Sequential fade-in loading animation
- **Sticky Header**: Shrinks on scroll with smooth transitions
- **Hero Section**: Typewriter effect cycling through technologies
- **Animated Counters**: Number animations in About section
- **Scroll Animations**: AOS.js reveals on scroll
- **Timeline**: Vertical experience timeline with alternating sides
- **Project Carousel**: Swiper.js with navigation and pagination
- **Contact Form**: Toast notifications on form submission
- **Responsive Design**: Mobile-first, fully responsive layout
- **Glassmorphism**: Glass effect cards with backdrop blur
- **Custom Scrollbar**: Themed scrollbar matching color palette

---

## 🎨 Customization

### Colors

Edit `src/index.css` to modify the color palette:

```css
--charcoal: 215 24% 7%;
--silver: 240 7% 90%;
--electric-green: 142 71% 45%;
--violet: 258 90% 66%;
```

### Fonts

Fonts are loaded from Google Fonts in `index.html`. To change fonts, update the link and modify `tailwind.config.ts`.

### Content

Update component files in `src/components/` to modify content:
- `Hero.tsx` - Name, title, location, contact info
- `About.tsx` - Professional summary and stats
- `Skills.tsx` - Technical skills by category
- `Experience.tsx` - Work experience timeline
- `Projects.tsx` - Featured projects
- `Education.tsx` - Educational background
- `Certifications.tsx` - Professional certifications
- `Contact.tsx` - Contact information and form

---

Built with ❤️ by Gunakar Pyla
