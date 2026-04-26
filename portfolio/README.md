# João Saraiva — Portfolio

> Junior Web Developer · React · UI/UX-minded

Welcome! This repository contains the source code for my personal portfolio — a project I built from the ground up to showcase who I am, the work I do, and the way I think about building modern web interfaces.

🔗 **Live demo:** _coming soon_
📫 **Contact:** via the Contact page on the site, or reach out on LinkedIn.

---

## 👋 About me

I'm **João Saraiva**, a Junior Web Developer passionate about crafting clean, accessible, and visually polished web experiences. I enjoy bridging design and code.

This portfolio is both a presentation of my work and a sample of it: every pixel, animation, and interaction was designed and implemented by me.

---

## ✨ Highlights

- **Custom dark glassmorphism design** — built from scratch, not a template
- **Light & dark mode** with user preference persisted in `localStorage`
- **Fully responsive** layout, mobile sidebar navigation included
- **Smooth, intentional micro-interactions** (pulsing availability pill, hover rings, animated tech ticker)
- **Accessible contact form** protected by Google reCAPTCHA v2
- **Typography system** pairing **Syne** (display) with **Inter** (body) for a modern editorial feel
- **Component-driven architecture** — small, reusable pieces over monolithic files

---

## 🛠 Tech Stack

| Area | Tools |
|---|---|
| Framework | **React** + **Vite** |
| Styling | **CSS Modules**, custom design tokens |
| Icons | **lucide-react** |
| Forms / Security | **Google reCAPTCHA v2** |
| Tooling | **ESLint**, **pnpm** |

---

## 📁 Project Structure

```
portfolio/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer/
│   │   └── Header/
│   ├── context/
│   ├── data/
│   ├── pages/
│   │   ├── About/
│   │   ├── Contacts/
│   │   └── Home/
│   ├── App.css
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── eslint.config.js
├── vite.config.js
├── package-lock.json
├── package.json
└── README.md
```

**A quick tour:**

- **`public/`** — static assets served as-is (favicon, downloadable CV, icons).
- **`src/assets/`** — images and SVGs imported by components.
- **`src/components/`** — reusable UI pieces (Header, Footer, …), each colocated with its own CSS file.
- **`src/context/`** — React context providers (e.g. theme / dark mode).
- **`src/data/`** — static content (projects, skills, etc.) kept separate from the UI for easy updates.
- **`src/pages/`** — one folder per route (Home, About, Contacts), each with its component and styles.
- **`App.jsx` / `main.jsx`** — application entrypoint and root component.

---


## 🎨 Design Decisions

- **Glassmorphism over flat UI**  chose frosted-glass cards on a deep neutral background to give the site a contemporary, editorial feel without sacrificing readability.
- **Electric blue (`#6B9EFF`) accent**  a single, confident accent color keeps focus on the content.
- **Syne + Inter** — Syne brings personality to headings; Inter keeps body copy clean and highly legible.
- **Theme persistence** — respecting user preference is a small detail that signals care.

---

## 📈 What I learned building this

- Designing a coherent visual system from tokens up (colors, spacing, typography).
- Structuring a React app for clarity: pages, components, context, and data each with a clear responsibility.
- Implementing accessible forms and integrating third-party services (reCAPTCHA).
- Balancing aesthetics with performance — animations stay smooth, assets stay light.

---

## 📬 Let's talk

If you're hiring and this resonates with you, I'd love to chat. You can reach me through the **Contact** page on the live site, or connect with me on LinkedIn.

Thanks for taking the time to look through my work. 🙌

---

© João Saraiva
