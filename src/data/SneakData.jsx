import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCake,
    faLightbulb,
  faQuoteLeft,
  faRunning,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
const SneakData = [
  {
    iconSneak: <FontAwesomeIcon icon={faQuoteLeft} />,
    textSneak: "Favorite quote",
    iconNameSneak: "Quote",
  },
  {
    iconSneak: <FontAwesomeIcon icon={faStar} />,
    textSneak: "Lesson",
    iconNameSneak: "Lesson",
  },
  {
    iconSneak: <FontAwesomeIcon icon={faRunning} />,
    textSneak: "Key Action",
    iconNameSneak: "Action",
  },
  {
    iconSneak: <FontAwesomeIcon icon={faLightbulb} />,
    textSneak: "Insight",
    iconNameSneak: "Insight",
  },
  {
    iconSneak: <FontAwesomeIcon icon={faCake} />,
    textSneak: "Interesting",
    iconNameSneak: "Interesting",
  },
  {
    iconSneak: <FontAwesomeIcon icon={faApple} />,
    textSneak: "Concept",
    iconNameSneak: "Concept",
  },
];

export default SneakData;
