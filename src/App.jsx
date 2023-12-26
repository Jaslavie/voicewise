import { useState } from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import Nav from "./components/Nav.jsx";
import Resources from "./pages/Resources.jsx";
import About from "./pages/About.jsx";
import Foot from "./components/Foot.jsx";

function App() {
  console.log(window.location);
  // sets page according to selected navLink
  let component;
  switch (window.location.pathname) {
    case "/voicewise/":
      component = <Home />;
      break;
    case "/voicewise/resources":
      component = <Resources />;
      break;
    case "/voicewise/about":
      component = <About />;
      break;
  }

  return (
    <>
      <>
        <Nav />
        {component}
        <Foot />
      </>
    </>
  );
}

export default App;
