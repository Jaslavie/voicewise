import logo from "../images/VoicewiseLogo.svg";

function Nav() {
  return (
    <div className="full-nav-contain">
      <div className="banner-contain">
        Learn on-the-go. Listen to the <a href="">Self Mastery Podcast</a>
      </div>
      <div className="nav-contain">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <ul>
          <li>
            <a href="/voicewise/resources">Resources</a>
          </li>
          <li>
            <a href="/voicewise/about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
