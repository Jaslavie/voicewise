import logo from "../images/VoicewiseLogo.svg";
import {Link} from "react-router-dom";

function Nav() {
  return (
    <div className="full-nav-contain">
      <div className="banner-contain">
        Learn on-the-go. Listen to the <a href="">Self Mastery Podcast</a>
      </div>
      <div className="nav-contain">
        <Link to="/voicewise/"><img src={logo} alt="" /></Link>
         
        <ul>
          <li>
            <Link to="/voicewise/resources">Resources</Link>
            
          </li>
          <li>
            <Link to="/voicewise/about">About</Link>
            {/* <a href="/voicewise/about">About</a> */}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
