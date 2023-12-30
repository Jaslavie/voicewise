import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faRunning,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
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
];

export default SneakData;
