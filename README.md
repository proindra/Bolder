# ⚡ Bolder: Design Without Boundaries

![Bolder App](./public/assets/icons/anime_pink_kawaii.png)

**Bolder** is a premium, high-fidelity web application designed for modern digital creators to craft, tweak, and export custom icons and folders. Built with a stunning dark-mode cinematic aesthetic, glassmorphism UI, and highly interactive components, Bolder provides an environment where designers can manipulate constraints dynamically.

---

## 🚀 Features

- **Interactive Editor Dashboard:** 
  - Dynamic preset selection rendering live composite textures.
  - Interactive "Tweak" sliders manipulating CSS filters (`hue-rotate`, `brightness`, `contrast`) in real-time.
  - Active global glow colors based on custom palettes.
  - Toggable layer visibility for base structures and textures.
- **Glassmorphic UI Design System:** Deeply integrated translucent panels, floating elements, blurred neon backdrops, and modern micro-animations using Tailwind CSS.
- **Dynamic Pricing Engine:** Clean lifetime pricing tiers featuring an active coupon validation system (Try code: `BOLDER20`).
- **Responsive Navigation:** Clean HashRouter-based routing between Landing, Editor, Templates, Pricing, and more.
- **Zero-Dependency Animations:** Pure CSS and Tailwind transitions for an ultra-smooth, lightweight feel.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/) (HashRouter for seamless static deployment)
- **Icons:** Google Material Symbols

---

## 🏎️ Getting Started

To run the Bolder application locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/proindra/Bolder.git
   cd Bolder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173/Bolder/` (or whichever port Vite assigns).

---

## 📁 Project Structure

```text
src/
├── assets/         # Static images, folder icons, and textures
├── components/     # Reusable UI components
│   ├── TopNavBar.tsx   # Global persistent top navigation
│   └── Footer.tsx      # Global persistent footer
├── pages/          # Application views
│   ├── LandingPage.tsx # Hero, Demo video, CTAs
│   ├── Editor.tsx      # Core interactive design suite
│   ├── Pricing.tsx     # Pricing tiers & coupon logic
│   ├── Templates.tsx   # Community presets gallery
│   └── ...
├── App.tsx         # Main router setup
├── index.css       # Core Tailwind config & custom utilities
└── main.tsx        # React mounting point
```

---

## 🌐 Deployment

This project uses a standard Vite build pipeline and is configured to be deployed easily to static hosts like **GitHub Pages**. 
Because it utilizes `HashRouter`, routing works perfectly on static file servers without configuring custom redirect rules.

```bash
npm run build
```
The output will be generated in the `/dist` directory.

---

## 🎨 Design System (`index.css`)

Bolder utilizes custom Tailwind utilities specifically built for its visual language:
- `.glass-card`, `.glass-panel`: Translucent surfaces with backdrops.
- `.neon-glow`: Intense orange hover shadows for CTAs.
- `.glow-active`: Active selection states with inner and outer light reflections.
- `bg-primary-container`: The core brand color `#ff6b00` mapped globally.

---
*Built with ❤️ for creators.*
