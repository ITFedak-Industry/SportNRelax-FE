# Browse – Health & Sport Services Aggregator

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
├── pages/         # Full pages or large parts of a page in nested routing
├── widgets/       # Reusable UI parts composed of features and entities (IssueList, UserProfile, etc.)  (optional)
├── features/      # Reused implementations of entire product features (e.g., SendComment, AddToCart, UserSearch)
├── entities/      # Core domain models (e.g., user, vendor, blog)
└── shared/        # Reusable components, UI, hooks, utils
```

> Learn more: [Feature-Sliced Design](https://feature-sliced.github.io/documentation/docs/reference/layers#widgets)

## 🧑‍💻 Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing

```bash
pnpm test
# or
pnpm run test:watch
```

---

## 📦 Dependencies

- [React Router V7](https://reactrouter.com/7.6.0/home) – For server-side rendering and SEO
- [Redux Toolkit & RTK Query](https://redux-toolkit.js.org/introduction/getting-started) – Powerful asynchronous state management for React
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
