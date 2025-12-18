# Aeon | Precision Practice

![Aeon Badge](https://img.shields.io/badge/Status-Pre--Launch-emerald) ![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8)

> **Aeon** is a high-performance landing page for an AI-powered music practice app. It features a cinematic "dark studio" aesthetic, immersive WebGL backgrounds, and interactive UI components designed to convert visitors into waitlist signups.

## ✨ Features

- **Immersive 3D Background**: A custom particle system built with **Three.js** that reacts to mouse movement.
- **Reactive Animations**: Smooth entrance and hover effects powered by **Framer Motion**.
- **Simulated Demo**: An interactive audio visualizer mock that demonstrates the product's "Text-to-Stem" capabilities without requiring backend GPU processing.
- **Atmospheric Design**: Custom film grain overlays, backdrop blurs, and a "Deep Black" color palette.
- **Responsive**: Fully optimized for mobile, tablet, and desktop viewports.

## 🛠 Tech Stack

- **Core**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Visuals**: Three.js (WebGL), Framer Motion
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans (UI), Space Grotesk (Headings)

## 🚀 Getting Started

To run this project locally:

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```text
/
├── index.html              # Entry point & Tailwind Config
├── src/
│   ├── components/
│   │   ├── Layout/         # Navbar, Footer
│   │   ├── Sections/       # Landing page sections (Hero, Demo, Waitlist, etc.)
│   │   └── ui/             # Reusable atoms (Buttons, Logo)
│   ├── constants.ts        # Global strings, nav items, and mock data
│   ├── types.ts            # TypeScript interfaces
│   ├── App.tsx             # Main application layout
│   └── index.tsx           # React DOM rendering
└── metadata.json           # Project metadata
```

## 🔌 Backend Integration (Waitlist)

Currently, the **Waitlist Form** (`components/Sections/Waitlist.tsx`) is set to **simulation mode**. It logs data to the console (`console.log`) and shows a success message after a fake delay.

To collect real emails, you can integrate:
1.  **Formspree**: Replace the form submit handler with a Formspree endpoint.
2.  **Supabase/Firebase**: Connect the `handleSubmit` function to a database SDK.
3.  **API**: Point the fetch request to your own backend server.

## 🎨 Customization

- **Branding**: Change `APP_NAME` in `constants.ts`.
- **Colors**: Modified via the `tailwind.config` script inside `index.html`.
- **Hero Particles**: Adjust particle count and speed in `components/Sections/Hero.tsx`.

## 📄 License

This project is proprietary. All rights reserved.
