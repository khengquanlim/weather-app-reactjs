# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### Steps to run project

> npm install
> npm install tailwindcss @tailwindcss/vite
> npm run dev

#### Considerations

1. Opted for tailwind CSS for web and mobile device adaptability
2. Separated to components, pages, services for better code tracking and maintainability
3. Setup theme swapping (background only for now)
4. Adopted a custom hook to detect mobile version for weather information form large difference in look between web and mobile

##### Future TO-DO

1. Continue working on theme toggle that not only swap backgrounds
2. Find a better method to separate Weather Information Form's web view and mobile view.