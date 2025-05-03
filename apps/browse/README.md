# Learn – Health & Sport Services Aggregator

**Browse** is an SEO-optimized platform built with **Next.js**, **React Query**, and **Feature-Sliced Architecture (FSD)**.
The app is user-friendly intuitive UI to list and make customers easy find desired service

## 🌐 Live Demo

Coming soon...

---

## 🚀 Features

- ⚡️ **Next.js-powered SSR** for great SEO and performance
- 🧩 **Feature-Sliced Architecture (FSD)** for scalable and maintainable codebase
- 🧠 **Educational content** for onboarding and user support
- 🗃 **Main Page** to explore vendors and services
- ℹ️ **About Platform** to understand the mission and how it works
- 📝 **Blog pages** for:
  - Platform owners to share updates and news
  - Service providers and users to share insights and interests
- 🧪 **Jest** support for unit testing

---

## 🧑‍🏫 What Users Can Do

### ✅ Discover Services

From the **Main Page**, users can browse curated listings of health and sport service providers, compare offerings, and initiate contact or bookings.

### 📘 Learn How to Use

The `Learn` section provides:

- Tutorials on using the platform
- Tips on selecting a provider
- Guidance for service providers on how to join

### ℹ️ About the Platform

This section answers:

- Who we are and our mission
- How vendors are selected and verified
- How we ensure trust and safety

### 📝 Blog Functionality

- **Owners**: Post platform news, feature rollouts, insights
- **Service Providers & Users**: Publish blog entries around sport, health, training tips, wellness trends, etc.

## 📁 Project Structure

The project follows the **Feature-Sliced Design (FSD)** methodology for scalable, modular development.

```
src/
├── app/           # App-level config and providers (Redux, routing, theming)
├── entities/      # Core domain models (e.g., user, vendor, blog)
├── features/      # Functional units (e.g., blog creation, vendor search)
├── pages/         # Next.js pages
├── shared/        # Reusable components, UI, hooks, utils
└── widgets/       # Page-level components (headers, footers, etc.)
```

> Learn more: [Feature-Sliced Design](https://feature-sliced.design/)

## 🧑‍💻 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing

```bash
npm test
# or
npm run test:watch
```

---

## 📦 Dependencies

- [Next.js](https://nextjs.org/) – For server-side rendering and SEO
- [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/examples/basic/) – Powerful asynchronous state management for React
- [Jest](https://jestjs.io/) – Testing framework
- [ESLint](https://eslint.org/) – Code quality
- [Feature-Sliced Design](https://feature-sliced.design/) – Architectural guideline

---

## 🔧 Production Build

```bash
npm run build
npm run start
```

---

## ✨ Roadmap

- [ ] Vendor dashboard and analytics
- [ ] Booking and payment integration
- [ ] Multilingual support
- [ ] Rich WYSIWYG blog editor
- [ ] Blog comment and reaction system
- [ ] Email notifications

---

## 📝 License

MIT

---

## 👥 Contributing

We welcome contributions! Please open an issue or feature request before submitting a pull request.
