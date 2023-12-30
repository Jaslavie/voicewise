import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import Resources from "./pages/Resources.jsx";
import About from "./pages/About.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/voicewise/",
//     element: <App/>,
//   },
//   {
//     path: "/voicewise/resources",
//     element: <Resources/>,
//   },
//   {
//     path: "/voicewise/about",
//     element: <About/>,
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/voicewise/" element={<App />} />
        <Route path="/voicewise/resources/*" element={<Resources />} />
        <Route path="/voicewise/about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
