
# TodoApp

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Description
A task management app built with React.js, allowing users to add, edit, delete, and manage tasks efficiently. The app features task filtering, sorting, and a responsive design.

## Features
- Add, edit, delete, and toggle task completion.
- Filter tasks by priority and category.
- Sort tasks by due date or title.
- Persistent task storage using localStorage.
- Responsive design with Tailwind CSS.
- Sidebar navigation for easy access to pages.

## Tech Stack
- **Frontend**: React.js, React Router, Tailwind CSS
- **State Management**: React Context API
- **Icons**: Lucide React
- **Utilities**: UUID, localStorage

## Folder Structure
- `src/components`: Reusable components like `SideBar` and `TaskCreation`.
- `src/pages`: Page components like `Home`, `Dashboard`, `Login` and `Calendar`.
- `src/context`: Context for managing global state (`TaskProvider`).
- `public/`: Static assets.


## to run the project 
 git clone <project-url>
 
 cd my-project
 
 npm i
 
 npm run dev 

