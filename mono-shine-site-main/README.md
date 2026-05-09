# Mono Shine

![GitHub stars](https://img.shields.io/github/stars/devdaga2006-art/mono-shine?style=social)
![GitHub forks](https://img.shields.io/github/forks/devdaga2006-art/mono-shine?style=social)
![License](https://img.shields.io/github/license/devdaga2006-art/mono-shine)
![Vite](https://img.shields.io/badge/Vite-5.4.19-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-teal)

Mono Shine is a polished React + Tailwind landing page built with Vite and TypeScript. It is designed as a modern, responsive portfolio-style project with reusable UI components and clean frontend architecture.

## 🚀 Project Overview

Mono Shine delivers a scalable static front-end experience with rich layout sections for hero, about, services, testimonials, and contact. It is built using a component-driven structure and modern tooling that makes it easy to extend, deploy, and customize for brand or product showcase sites.

## ✨ Features

- Responsive landing page layout optimized for desktop and mobile
- Modular component library with shadcn-style primitives
- Dynamic page routing with React Router
- Global UI state via React Query
- Toast and tooltip support for polished interactions
- Accessible UI components using Radix primitives
- Ready for future API, CMS, or backend integration

## 🧭 Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- React Query
- Radix UI
- Sonner notifications
- Vitest for testing

## 📁 Folder Structure

```text
mono-shine-site-main/
├── public/                  # Static assets and metadata
├── src/
│   ├── assets/              # Images, icons, and media
│   ├── components/          # Reusable UI components
│   │   ├── site/             # Landing page sections
│   │   └── ui/               # Design system primitives
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility helpers and data
│   ├── pages/               # Routes and page views
│   ├── App.tsx              # Root application layout
│   ├── index.css            # Global styling
│   └── main.tsx             # Application entrypoint
├── package.json             # Project metadata and scripts
├── tailwind.config.ts       # Tailwind config
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite build config
└── README.md                # Project documentation
```

## ⚙️ Installation & Setup

Run the following commands to get the project running locally.

```bash
# Clone repository
git clone https://github.com/devdaga2006-art/mono-shine.git
cd mono-shine/mono-shine-site-main

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser to preview the project.

## 🔧 Development Scripts

```bash
npm run dev      # Start local development server
npm run build    # Build production-ready output
npm run preview  # Preview production build locally
npm run lint     # Run ESLint checks
npm run test     # Run Vitest tests
```

## 🔐 Environment Variables Setup

This project is currently a frontend application, but it is ready to connect to APIs or backend services.

Create a `.env` file in the project root if you need environment variables for future backend integration.

```env
# Example .env file
VITE_API_BASE_URL=http://localhost:5000/api
VITE_CONTACT_ENDPOINT=/contact
NODE_ENV=development
```

> If you connect a backend service later, ensure the frontend fetches against `VITE_API_BASE_URL`.

## 🧪 Usage Instructions

Use the following commands for daily development and production preparation.

```bash
npm run dev
npm run build
npm run preview
```

- Develop with `npm run dev` and hot reload.
- Build optimized static assets with `npm run build`.
- Verify the production output locally with `npm run preview`.

## 🖼️ Screenshots

> Add project screenshots here once the UI is finalized.

## 🔌 API / Backend Integration

Mono Shine is frontend-first today, but it is architected to support backend integration in the future.

Potential integrations:

- Contact form submission service
- CMS-driven content or blog pages
- Lead capture and analytics APIs
- Authentication and user dashboards

When integrated, use environment variables like `VITE_API_BASE_URL` and add API utilities under `src/lib/`.

## 🌱 Future Enhancements

- Add a headless CMS or content management layer
- Create a backend API for contact and lead forms
- Add authentication and protected pages
- Improve test coverage with UI and integration tests
- Add dark mode toggle and theme support
- Add deployment pipeline for Vercel/Netlify/GitHub Pages

## 🤝 Contribution Guidelines

Contributions are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them
4. Push to your branch: `git push origin feature/your-feature`
5. Open a pull request

Please keep the scope focused and update the README if you add new functionality.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Dev Daga**

- GitHub: [devdaga2006-art](https://github.com/devdaga2006-art)
- Portfolio: Add your portfolio URL here

---

Mono Shine is a responsive, component-driven React landing page built for modern portfolio presentation and easy frontend scaling. 🚀

