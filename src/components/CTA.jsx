import React from "react";
import BlueGradient from "../images/blue gradient.svg";
import PurpleGradient from "../images/purple gradient.svg";
import { Link } from "react-router-dom";

function CTA({ CTA, CTAmsg }) {
  return (
    <div className="cta-contain">
      <div className="callout-contain">
        <h1>{CTA}</h1>
        <p>{CTAmsg}</p>
        <button className="main-button">
          <Link to="/voicewise/resources">Explore now</Link>
        </button>
      </div>
      <img
        src={BlueGradient}
        style={{
          position: "absolute",
          marginRight: "-56vw",
          marginTop: "-56vh",
          top: "0",
          right: "0",
          zIndex: "1",
        }}
      />
      <img
        src={PurpleGradient}
        style={{
          position: "absolute",
          marginRight: "60vw",
          marginTop: "20vh",
          top: "0",
          right: "0",
          zIndex: "1",
          width: "900px",
        }}
      />
    </div>
  );
}

export default CTA;
