import Icontag from "../components/Icontag";
import PillarData from "../data/PillarData";
import TypeData from "../data/TypeData";
import TopicData from "../data/TopicData";
import Tag from "../components/Tag";
import resourcesData from "../data/ResourcesData";
import PropTypes from "prop-types";
function Resourceitems({
  id,
  h3,
  p,
  iconName,
  iconNameType,
  // iconNameTopic,
  onClick,
}) {
  // creates a function for the selected pillar and iterates through
  // pillarsData until it finds an iconName with the same selected name in the home page
  const selectedPillar = PillarData.find(
    (pillar) => pillar.iconName === iconName,
  );
  const selectedType = TypeData.find(
    (type) => type.iconNameType === iconNameType,
  );
  // const selectedTopic = TopicData.find(
  //   (topic) => topic.iconNameTopic === iconNameTopic,
  // );

  // need a handleclick function in order to pass onClick in resource.jsx
  const handleClick = () => {
    // Call the onClick function passed as a prop that can be called in <Resourceitems />
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      {/* takes in on click function as a prop to child components*/}
      <div className="resource-item" onClick={handleClick}>
        <Icontag icon={selectedType.icon} text={selectedType.text} />
        <h3>{h3}</h3>
        <p>{p}</p>
        <div className="line">
          <hr />
        </div>
        <div className="resource-row">
          <p>Pillar &nbsp;&nbsp;</p>
          <Icontag icon={selectedPillar.icon} text={selectedPillar.text} />
        </div>
        <div className="resource-row">
          <p>Topics</p>
          {resourcesData[id]?.selectedTopics.map((selectedTopic, index) => {
            const topicInfo = TopicData.find(
              (topic) => topic.iconNameTopic === selectedTopic.iconNameTopic,
            );
            return <Tag key={index} text={topicInfo.text} />;
          })}
        </div>

        {/* <Tag text={selectedTopic.text} /> */}
      </div>
    </div>
  );
}
Resourceitems.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  h3: PropTypes.string,
  p: PropTypes.string,
  iconName: PropTypes.string,
  iconNameType: PropTypes.string,
  iconNameTopic: PropTypes.string,
  onClick: PropTypes.func,
};

export default Resourceitems;
