# UI Shared Library

This repository contains a **shared UI component library** built using **React** and **Vite**, designed for reuse across multiple applications. The goal is to provide a consistent, easily maintainable, and scalable design system that accelerates development and ensures visual consistency across products.

## ✨ Features

- ⚛️ **React** with fast refresh and HMR (Hot Module Replacement) via **Vite**
- 🧱 Prebuilt **shared components** following the Connexion Design System
- 🎨 Figma design integration for accurate visual matching
- 📦 Ready to publish as an npm package (optional)
- 🧹 Code linting with **ESLint**
- 📚 Component documentation and previews via **Storybook**

## 📁 Folder Structure

```
ui-shared-library/
├── .storybook/         # Storybook configuration
├── src/
│   ├── components/     # Shared UI components
│   ├── hooks/          # Reusable custom React hooks (optional)
│   └── index.ts        # Export components for consumption
├── public/             # Static assets
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── .eslintrc.js        # ESLint rules
└── package.json
```

## 🎨 Design Reference

All components follow the design guidelines provided in the Connexion Design System. For reference, please consult the Figma file linked below:

👉 [Figma File](https://www.figma.com/design/gwL0YfUs4PHz986Pt5HiaE/Connexion-Design-System---Component-Library?node-id=3532-309&t=cCwa6UutVS5toMZ9-0)

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run Storybook (Component Previews)

Storybook is used to develop and showcase individual components in isolation.

```bash
npm run storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006) by default.

### 3. Build the library

To generate a bundled version of the library for distribution:

```bash
npm run build
```

### 4. Lint your code

To run ESLint:

```bash
npm run lint
```

## 📦 Publishing (Optional)

To publish your library as a package to npm:

1. Ensure your components are exported via `src/index.ts`
2. Build the library:
   ```bash
   npm run build
   ```
3. Login and publish:
   ```bash
   npm login
   npm publish
   ```

> 🔐 Consider setting `"private": true` in `package.json` if you don’t want it published.

## 🧑‍💻 Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Storybook**
- **ESLint**
- **Figma** (for design specs)

## 📬 Contributing

1. Fork the repo
2. Create your feature branch: `git checkout -b feat/my-new-component`
3. Commit your changes: `git commit -m "Add new component"`
4. Push to the branch: `git push origin feat/my-new-component`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.
