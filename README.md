# Voyage-FE

Frontend application built with [React](https://react.dev/) + [Vite](https://vitejs.dev/) + TypeScript.

## Requirements

- Node.js 20+
- npm

## Installation

```bash
npm install
```

## Running locally

```bash
npm run dev
```

The app runs on `http://localhost:5173` by default.

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Linting

```bash
npm run lint
```

## App Shell

- React Router configured with a public route (`/login`) and protected routes (wrapped by `ProtectedRoute`)
- Auth token stored in `localStorage` and automatically attached to API requests via axios interceptor (`src/api/axios.ts`)
- Basic layout with navigation and room switcher placeholder
