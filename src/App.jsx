import { useState } from "react";
import "./App.css";
import Home from "./pages/Home.jsx";

function App() {
  // console.log(window.location);
  // // sets page according to selected navLink
  // let component;
  // switch (window.location.pathname) {
  //   case "/voicewise/":
  //     component = <Home />;
  //     break;
  //   case "/voicewise/resources":
  //     component = <Resources />;
  //     break;
  //   case "/voicewise/about":
  //     component = <About />;
  //     break;
  // }

  return (
    <>
      <Home />
    </>
  );
}

export default App;
