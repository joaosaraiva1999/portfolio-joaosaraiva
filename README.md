# Joao Saraiva - Portfolio

Personal portfolio built with React and Vite to present my work, background, skills, and contact information as a junior web developer.

Live site: [joaosaraiva.dev](https://joaosaraiva.dev/)

## Overview

This project is a multi-page portfolio focused on clean UI, responsive layouts, smooth Motion animations, and a simple contact flow powered by EmailJS and Google reCAPTCHA v2.

## Highlights

- Responsive portfolio with Home, Projects, About, Education, and Contacts pages
- Light and dark theme support
- Smooth page and component animations using `motion/react`
- Mobile-friendly navigation with sidebar behavior
- Contact form using EmailJS
- Google reCAPTCHA v2 protection for the contact form
- Form validation separated from the UI
- Data-driven sections for easier content updates
- Clean component/page structure with plain CSS files

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React + Vite |
| Routing | React Router |
| Styling | Plain CSS |
| Animations | Motion |
| Icons | lucide-react, react-icons |
| Contact Form | EmailJS |
| Spam Protection | Google reCAPTCHA v2 |
| Tooling | ESLint, npm |

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

Important:

- The `VITE_RECAPTCHA_SITE_KEY` is the public Google reCAPTCHA site key.
- The Google reCAPTCHA secret key must stay inside EmailJS template settings.
- Do not commit `.env.local`.
- Add the same environment variables in Vercel for production deployments.
- Redeploy after changing Vercel environment variables because Vite reads them at build time.

## Contact Form

The contact form is split into three parts:

```txt
src/pages/Contacts/Contacts.jsx
src/hooks/useContactForm.js
src/utils/validateForm.js
```

`Contacts.jsx` renders the UI.

`useContactForm.js` handles form state, reCAPTCHA state, submit status, and EmailJS sending.

`validateForm.js` checks required fields, email format, message length, and reCAPTCHA completion.

EmailJS template variables should match the form field names:

```txt
{{name}}
{{email}}
{{message}}
```

Recommended EmailJS template settings:

```txt
To Email: your email address
From Name: {{name}}
Reply To: {{email}}
```

## Project Structure

```txt
portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer/
│   │   ├── Header/
│   │   └── SecondaryHeader/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   │   └── useContactForm.js
│   ├── pages/
│   │   ├── About/
│   │   ├── Contacts/
│   │   ├── Education/
│   │   ├── Home/
│   │   └── Projects Page/
│   ├── utils/
│   │   ├── motion.js
│   │   └── validateForm.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Scripts

```txt
npm run dev      Start local development
npm run build    Create production build
npm run preview  Preview production build locally
npm run lint     Run ESLint
```

## Notes

This project uses Vite environment variables, so any variable that starts with `VITE_` is available in the browser. These values are not private secrets. Keep private keys, like the reCAPTCHA secret key, outside the React app.

## Author

Joao Saraiva

[joaosaraiva.dev](https://joaosaraiva.dev/)
