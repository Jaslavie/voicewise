import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faSeedling, faBrain, faBriefcase, faHeartPulse, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const PillarData = [
    {icon: <FontAwesomeIcon icon={faUserGroup} />, text: 'Social', iconName: 'Social' },
    {icon: <FontAwesomeIcon icon={faSeedling} />, text: 'Personal', iconName: 'Personal'},
    {icon: <FontAwesomeIcon icon={faBrain} />, text: 'Knowledge', iconName: 'Knowledge'},
    {icon: <FontAwesomeIcon icon={faBriefcase} />, text: 'Career', iconName: 'Career'},
    {icon: <FontAwesomeIcon icon={faHeartPulse} />, text: 'Health', iconName: 'Health'},
    {icon: <FontAwesomeIcon icon={faGraduationCap} />, text: 'Academics', iconName: 'Academics'},
]

export default PillarData