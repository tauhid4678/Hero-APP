#  HeroApp

A modern, responsive **app discovery and installation platform** built with React + Vite. Browse, search, sort, and explore apps — with live stats, detailed app pages, and a clean UI.

🔗 **Live Demo:** [https://herroapp.netlify.app](https://herroapp.netlify.app)

---

## 📸 Preview

> Browse and discover apps with a beautiful banner, real-time stats, and intuitive navigation.

>Home
<img width="1900" height="1079" alt="Home" src="https://github.com/user-attachments/assets/f4fc25e8-4371-4b95-a91f-73575965b2ea" />


>Apps
<img width="1900" height="1070" alt="Apps" src="https://github.com/user-attachments/assets/ffa6c759-ec7e-46ea-8fcb-508631a07279" />


---

## ✨ Features

- 🔍 **Browse All Apps** — Explore the full app catalog with search and filtering
- 📊 **Live Stats Banner** — Real-time app statistics displayed prominently on the homepage
- 📄 **App Detail Pages** — Deep-dive into individual app information
- ⬇️ **Installation Tracking** — Track app installation status with custom hooks
- 🔃 **Smart Sorting** — Sort apps by various criteria using the sorting hook
- ❌ **Error & Not Found Handling** — Graceful error pages for a smooth UX
- 📱 **Responsive Design** — Fully mobile-friendly layout
- ⚡ **Fast Loading** — Optimized with Vite for near-instant page loads

---

## 🛠️ Tech Stack

| Technology                               | Purpose                 |
| ---------------------------------------- | ----------------------- |
| [React](https://react.dev/)              | UI framework            |
| [Vite](https://vitejs.dev/)              | Build tool & dev server |
| [React Router](https://reactrouter.com/) | Client-side routing     |
| JavaScript (ES6+)                        | Core language           |
| CSS                                      | Styling                 |
| Netlify                                  | Deployment & hosting    |

---

## 📁 Project Structure

```
HEROAPP/
├── public/
│   ├── assets/             # Static assets (images, icons)
│   ├── _redirects          # Netlify SPA redirect rules
│   ├── Appdata.json        # App data source (JSON)
│   └── vite.svg
│
├── src/
│   ├── Components/         # Reusable UI components
│   │   ├── Appcards.jsx        # Individual app card component
│   │   ├── AppsNotFound.jsx    # Empty/no-results state
│   │   ├── bannerandstats.jsx  # Hero banner with statistics
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Loader.jsx          # Loading spinner/skeleton
│   │   └── Navbar.jsx          # Top navigation bar
│   │
│   ├── Hooks/              # Custom React hooks
│   │   ├── useAppInstallation.js   # Manage app install state
│   │   ├── useAppSorting.js        # Sort/filter logic
│   │   ├── useInstalledApps.js     # Track installed apps
│   │   └── useSelectedApp.js      # Selected app state
│   │
│   ├── Layouts/            # Page layout wrappers
│   │   └── MainLayouts.jsx     # Main layout with Navbar + Footer
│   │
│   ├── Pages/              # Route-level page components
│   │   ├── Allapps.jsx         # All apps listing page
│   │   ├── Appdetails.jsx      # Individual app detail page
│   │   ├── ErrorPage.jsx       # 404 / error page
│   │   ├── Home.jsx            # Homepage
│   │   └── Installation.jsx    # Installed apps page
│   │
│   ├── Routes/
│   │   └── Routes.jsx          # App routing configuration
│   │
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
│
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/heroapp.git

# 2. Navigate into the project directory
cd heroapp

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:[port]`.

---

## 📦 Available Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start development server         |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Run ESLint checks                |

---

## 🗺️ Routes

| Path            | Page         | Description                         |
| --------------- | ------------ | ----------------------------------- |
| `/`             | Home         | Landing page with banner and stats  |
| `/apps`         | All Apps     | Full app catalog with search & sort |
| `/apps/:id`     | App Details  | Detailed view for a specific app    |
| `/installation` | Installation | View installed/tracked apps         |
| `*`             | Error Page   | 404 catch-all                       |

---

## 🔧 Custom Hooks

| Hook                 | Description                                   |
| -------------------- | --------------------------------------------- |
| `useAppInstallation` | Handles install/uninstall logic for apps      |
| `useAppSorting`      | Manages sorting state and sorted app list     |
| `useInstalledApps`   | Returns the list of currently installed apps  |
| `useSelectedApp`     | Tracks which app is currently selected/viewed |

---

## 📄 Data

App data is served from `public/Appdata.json`. Each app entry contains the app's metadata (name, description, icon, stats, etc.) and is fetched client-side.

To add or modify apps, edit the `Appdata.json` file following the existing data structure.

---

## 🌐 Deployment

This project is deployed on **Netlify**. The `public/_redirects` file ensures proper SPA routing:

```
/*    /index.html   200
```

To deploy your own instance:

1. Push your code to GitHub
2. Connect your repo to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

Built with ❤️ — feel free to reach out or open an issue if you have questions!

> ⭐ If you found this project helpful, consider giving it a star on GitHub!
