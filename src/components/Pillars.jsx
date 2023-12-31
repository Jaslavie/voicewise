function Pillars({ icon, h3, p }) {
  return (
    <>
      {/* pillars used for home page philosophy section */}
      <div className="pillar">
        <div className="mini-icon-contain">{icon}</div>
        <div className="right-contain">
          <h3>{h3}</h3>
          <p>{p}</p>
        </div>
      </div>
    </>
  );
}

export default Pillars;
