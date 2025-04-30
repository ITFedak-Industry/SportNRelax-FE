# Sessions – Sport & Relax Service Manager

**Sessions** is a modern React-based application for browsing and booking sessions for sport and relaxation services. It leverages **React Router**, **Redux Toolkit**, and **RTK Query** to deliver a fast, modular, and maintainable experience based on the **Feature-Sliced Design (FSD)** methodology.

---

## 🚀 Features

- 🔀 **[React Router V7](https://reactrouter.com/7.5.3/home) (Remix successor)** as React framework
- ⚙️ **Redux Toolkit** for predictable state management
- 🌐 **RTK Query** for efficient data fetching and caching
- 🧩 **Feature-Sliced Architecture (FSD)** for scalable and modular codebase
- 📅 **Service booking** system for sport or relax activities
- 🔄 Auto-refresh and invalidation of booked sessions
- 🧪 **Jest** support for unit testing

---

## 🧑‍🏫 What Users Can Do

### ✅ Browse & Book Services

- View available sport and relax services
- Book sessions and view upcoming bookings

### 🧰 Admin or Staff (Coming soon)

- Service providers will be able to manage availability and bookings

---

## 📁 Project Structure

Following **Feature-Sliced Design**, the codebase is modular and organized around features and domain entities.

```
src/
├── app/           # App-level setup (store, router, theming, providers)
├── entities/      # Domain models (e.g., session, service)
├── features/      # Business logic units (e.g., booking)
├── pages/         # Route-specific views (e.g., /main, /services)
├── shared/        # Reusable UI components, hooks, styles, utils
└── widgets/       # Layout and UI blocks (e.g., Header, SessionCard)
```

> Learn more: [Feature-Sliced Design](https://feature-sliced.design/)

---

## 🧑‍💻 Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run start      # Serve built app
npm test           # Run tests
```

---

## 📦 Key Dependencies

- [React](https://reactjs.org/) – Core library
- [React Router](https://reactrouter.com/) – Routing
- [Redux Toolkit](https://redux-toolkit.js.org/) – State management
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview) – Server state and data fetching
- [Jest](https://jestjs.io/) – Testing framework
- [ESLint](https://eslint.org/) – Linting
- [Feature-Sliced Design](https://feature-sliced.design/) – Architecture guideline

---

## ✨ Roadmap

- [ ] Admin dashboard for service providers
- [ ] Payment gateway integration
- [ ] Push/email notifications for bookings
- [ ] Calendar integration (Google, iCal)
- [ ] Session reminder system
- [ ] Mobile-optimized views

---

## 📝 License

MIT

---

## 👥 Contributing

We welcome your input! Feel free to open issues or suggest improvements via pull requests.
