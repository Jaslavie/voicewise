import Nav from "../components/Nav";
import Foot from "../components/Foot";
import FadeIn from "react-fade-in/lib/FadeIn";
import Notes from '../images/notesVoicewise.svg'
import BlueGradient from "../images/blue gradient.svg";
import PurpleGradient from "../images/purple gradient.svg";
import Speaker from '../images/speakerVoicewise.svg'
import Document from '../images/sparkleDocument.svg'
import Growth from '../images/sparkleGrowth.svg'
import Wand from '../images/sparkleWand.svg'
import CTA from "../components/CTA";
import Profile from "../images/profile picture jasmine.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
function About() {
  return (
    <>
      <Nav />
      <section>
        <FadeIn>
        <div className="about-contain" style={{margin: 'auto 14vw'}}>
          <h1 style={{fontSize: '74px'}}>
            Our mission is to curate <span>✦purposeful</span> content tailored for <span>⛯ambitious</span>{" "}
            teens
          </h1>
      
        </div>
        <div className="content-contain">
          <img src={Notes} />
          <div className="right-contain">
            <div className="tag">HERE IS THE PROBLEM</div>
            <h2>We consume a lot of content, but it's hard to organize</h2>
            <p>Whenever I discover a book that sparks my curiosity, a movie that tugs at my heartstrings, or a youtube video that I relate to, <b>I want to note it all down</b>. But the problem is, all the notion docs and notebooks were just difficult to organize and inaccessible. <b>It’s not enough just to note down key info, but how can I act upon it?</b></p>
          </div>
        </div>
        <div className="about-contain">
          <p>so I thought...</p>
          <h1>Why not create a centralized platform where you can <span>easily revisit</span> the key, <span>actionable concepts</span> from content we consume?</h1>
        </div>
        <div className="content-contain">
          
          <div className="right-contain">
            <div className="tag">ABOUT US</div>
            <h2>The birth of Voicewise: the centralized learning and self discovery hub</h2>
            <p> I decided to create this platform to share all the tidbits and “ah-ha!”’s of the content we consume - so <b>it’s not just consuming, it’s learning and finding active ways to apply that knowledge.</b>
<br /><br />
This is how Voicewise was born, and we hope to inspire you to actively leverage the content you consume to accelerate your self-discovery journey - whatever that may mean to you.</p>
          </div>
          <img src={Speaker} />
        </div>
        <div className="about-contain">
          <div className="tag">VALUES</div>
          <h1>Driven by <span>meaningful consumption</span></h1>
          <div className="values-contain">
            <div className="value-item">
                <img src={Document} alt="" />
                <h2>Lifelong learning</h2>
                <p>Feed your curiosity and cultivate a genuine desire to learn</p>
            </div>
            <div className="value-item">
                <img src={Growth} alt="" />
                <h2>Relentless growth</h2>
                <p>Foster the consistency and drive to chase for your highest potential.</p>
            </div>
            <div className="value-item">
                <img src={Wand} alt="" />
                <h2>Gamification</h2>
                <p>Turn learning and self-improvement into a game.</p>
            </div>
          </div>
        </div>
        <div className="team-contain">
          <div className="right-contain">
            <h1>Built for teens, <span>by teens</span></h1>
            <p>Voicewise is built by a team of Gen Z’ers passionate about all things self-improvement, learning, and driving genuine impact in the world.</p>
          </div>
          <div className="team-item">
            <img src={Profile} />
            <div className="right-contain">
              <h2>Jasmine Wu</h2>
              <div className="tag-contain">

             
              <div className="tag">Founder</div>
              <div className="tag">Designer</div>
              
              <a
                className="link-icon"
                href="https://www.linkedin.com/in/jaslavie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
              </div>
              <p>From working as a Product Designer at a B2C startup scaling to B2B to founding roles in end-to-end startup ecosystems, Jasmine is dedicated to fostering open source, lifelong learning.</p>
            </div>
          </div>
        </div>
        <CTA
        CTA ='Join the Revolution'
        CTAmsg = 'Find your purpose. Craft your vision. Achieve insane success'
        />
        </FadeIn>
       
      </section>
      <img
            src={BlueGradient}
            style={{
              position: "absolute",
              marginRight: "-55vw",
              marginTop: "-50vh",
              top: "0",
              right: "0",
              zIndex: "1",
            }}
          />
          <img
            src={PurpleGradient}
            style={{
              position: "absolute",
              marginRight: "55vw",
              marginTop: "6vh",
              top: "0",
              right: "0",
              zIndex: "1",
            }}
          />

      <Foot />
    </>
  );
}

export default About;
