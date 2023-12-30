import React from "react";
import Icontag from "./Icontag";

function SneakPeak({ iconSneak, textSneak, sneakTitle, sneakDescription }) {
  return (
    <div className="sneak-peak-item">
      <Icontag icon={iconSneak} text={textSneak} />
      <h3>{sneakTitle}</h3>
      <p>{sneakDescription}</p>
    </div>
  );
}

export default SneakPeak;
