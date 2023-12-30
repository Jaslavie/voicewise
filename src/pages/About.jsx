import Nav from "../components/Nav";
import Foot from "../components/Foot";

function About() {
  return (
    <>
      <Nav />
      <section>
        <div className="about-contain">
          <h1>
            Our mission is to curate
            <span>purposeful</span> content tailored for <span>ambitious</span>{" "}
            teens
          </h1>
        </div>
      </section>

      <Foot />
    </>
  );
}

export default About;
