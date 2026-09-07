# Bhupender Singh — Front-End Developer & Web Designer Portfolio

A modern, high-performance, and visually engaging personal portfolio website built with **React.js**, **Vite**, **Tailwind CSS**, and **HTML5 Canvas**. Designed and developed to showcase professional experience, web development projects, core technical skills, and client services.

## Live Demo

[Live Demo](https://bhupender-portfolio.vercel.app)

---

## Overview

This project serves as the official digital portfolio of **Bhupender Singh**, a Web Designer & Front-End Developer with 2.8+ years of professional experience based in Punjab, India. 

The website provides an interactive and seamless user experience with glassmorphic UI design cards, smooth section scrolling, a customizable dark/light theme toggle, real-time scroll progress tracking, dynamic portfolio project filtering, an interactive project details modal, and an automated email contact form integrated with celebration confetti effects.

---

## Features

* **Interactive Canvas Background**: Custom particle animation system built using HTML5 Canvas API that dynamically adapts particle styling based on dark/light theme state.
* **Dark & Light Mode Persistence**: Smooth theme switcher toggling dark mode on the document root element.
* **Responsive Navigation Header**: Sticky navigation bar with live scroll progress indicator, active section highlighting, mobile drawer navigation, and direct resume download action.
* **Interactive Portfolio Showcase**: Multi-category filterable project grid (React.js, WordPress, E-Commerce, Web Design) with detailed project preview modals featuring live site URLs, tech stack tags, and feature highlights.
* **Work Experience & Career Timeline**: Structured presentation of employment history, technical responsibilities, and key project accomplishments.
* **Services & Skills Matrix**: Visual breakdown of front-end capabilities, UI/UX design tools, and professional web development services with animated proficiency indicators.
* **Automated Contact Form**: Integrated contact form powered by `@formspree/react` with client-side field validation and celebration confetti effect using `canvas-confetti` upon successful submission.
* **Client Testimonials Carousel**: Auto-playing testimonial slider with manual next/previous navigation, page indicators, and hover-pause functionality.
* **Performant Scroll Animations**: Custom `ScrollReveal` component leveraging the native `IntersectionObserver` API for directional entrance animations (respects `prefers-reduced-motion`).
* **Comprehensive SEO Optimization**: Complete structured data schema markup (JSON-LD), Open Graph metadata, canonical links, and semantic HTML5 tags for search engine visibility.

---

## Technologies Used

### Core Framework & Build Tool
* **React.js** (v18.3.1)
* **Vite** (v6.0.7)
* **JavaScript** (ES6+)
* **HTML5** & **HTML5 Canvas API**

### Styling & Design System
* **Tailwind CSS** (v3.4.17)
* **PostCSS** & **Autoprefixer**
* **Vanilla CSS** (Custom utilities, glassmorphism effects, scrollbar styling)

### Libraries & Integrations
* **Lucide React** (v0.469.0) — Modern vector icon library
* **Formspree** (`@formspree/react` v3.0.0) — Serverless contact form handling
* **Canvas Confetti** (`canvas-confetti` v1.9.4) — Particle celebration animations

---

## Project Structure

```text
bhupender-portfolio/
├── public/
│   ├── Bhupender_Singh_Front_End_Developer.pdf
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── Portfolio.jsx
│   │   ├── ScrollReveal.jsx
│   │   ├── Services.jsx
│   │   ├── Skills.jsx
│   │   ├── Testimonials.jsx
│   │   └── WhyHireMe.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Installation

To run this project locally on your machine, ensure you have **Node.js** (v18 or higher recommended) and **npm** installed.

```bash
# Clone the repository
git clone https://github.com/Bhupender-Singh-D/bhupender-portfolio.git

# Navigate into the project directory
cd bhupender-portfolio

# Install dependencies
npm install

# Start the local development server
npm run dev
```

---

## Available Scripts

In the project directory, you can run:

```bash
# Start local development server with Vite (with host binding)
npm run dev

# Build production bundle to /dist directory
npm run build

# Preview production build locally
npm run preview
```

---

## Development

During local development, running `npm run dev` starts Vite's development server. Open your browser and navigate to `http://localhost:5173` (or the network URL displayed in your terminal).

* `src/App.jsx` handles global layout, background particle mounting, navigation, and section ordering.
* `src/components/` contains reusable, self-contained section components.
* `src/index.css` defines root theme utility classes, glassmorphic panel styling, custom scrollbars, and keyframe animations.

---

## Build & Deployment

### Production Build

To construct an optimized production build:

```bash
npm run build
```

This compiles optimized assets into the `dist/` directory using Vite.

### Deployment on Vercel

The project is optimized for automated continuous deployment on **Vercel**:

1. Import the repository into your Vercel Dashboard.
2. Select **Vite** as the framework preset.
3. Keep default settings:
   * Build Command: `npm run build`
   * Output Directory: `dist`
4. Deploy.

---

## Responsive Design

The portfolio is designed with a **mobile-first architectural approach** using Tailwind CSS grid and flexbox systems. Key breakpoint features include:

* Desktop (`lg:`): Full horizontal navigation menu, dual-column hero layout with code mockup avatar ring, side-by-side about stats, multi-column card grids.
* Tablet (`sm:` / `md:`): Adapted multi-column grid layouts and flexible modal widths.
* Mobile: Touch-friendly navigation drawer, optimized typography scale, stacked layout structures, and scroll-safe modals.

---

## UI/UX

* **Glassmorphism Aesthetic**: Translucent backdrop blur cards with subtle light/dark borders.
* **Micro-Animations**: Hover elevation transforms, pulse glow rings, button scale feedback, and progress indicators.
* **Typography**: Clean hierarchy utilizing Google Fonts (**Outfit** for display headers, **Inter** for UI copy).
* **Accessibility**: Keyboard focus rings (`focus-visible:ring-2`), ARIA labels, semantic markup, and reduced-motion animation overrides.

---

## Browser Support

Tested and supported across all modern evergreen browsers:

* Google Chrome (latest)
* Mozilla Firefox (latest)
* Apple Safari (latest)
* Microsoft Edge (latest)

---

## Author

**Bhupender Singh**
* **Role**: Web Designer & Front-End Developer
* **Location**: Sahibzada Ajit Singh Nagar, Punjab, India
* **Email**: bhupendernadal@gmail.com
* **Phone**: +91 9015381011
* **LinkedIn**: [Bhupender Singh](https://www.linkedin.com/in/bhupender-singh-b39ba9289)
* **GitHub**: [Bhupender-Singh-D](https://github.com/Bhupender-Singh-D)
* **Behance**: [Bhupender Singh](https://www.behance.net/bhupender-singh)
