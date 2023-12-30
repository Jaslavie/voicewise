import Icontag from "../components/Icontag";
import PillarData from "../data/PillarData";
import TypeData from "../data/TypeData";
import TopicData from "../data/TopicData";
import Tag from "../components/Tag";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faFilter,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Numbers from "./Numbers";
import NumbersData from "./Numbers";
import PillarsButtons from "./PillarsButtons";
import resourcesData from "../data/ResourcesData";
import Callout from "./Callout";
import SneakPeak from "./SneakPeak";
import SneakData from "../data/SneakData";
import BlueGradient from "../images/blue gradient.svg";
import PurpleGradient from "../images/purple gradient.svg";
import CheckContain from "./CheckContain";

function ResourceInner({
  h1,
  id,
  p,
  link,
  iconNameType,
  onBack,
  readTime,
  price,
  pageCount,
  iconName,
  summary,
  sneakTitle,
  sneakDescription,
  coreTopic,
  type,
}) {
  const selectedPillar = PillarData.find(
    (pillar) => pillar.iconName === iconName,
  );
  const selectedType = TypeData.find(
    (type) => type.iconNameType === iconNameType,
  );
  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };
  return (
    <>
      <section>
        <div className="resource-inner-contain">
          {/* back link */}
          <button>
            <Link
              to="/voicewise/resources"
              onClick={onBack}
              className="navigate-button"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <p>Go Back</p>
            </Link>
          </button>

          <div className="two-column-contain">
            <div className="left-resource-contain">
              <Icontag icon={selectedType.icon} text={selectedType.text} />
              <h1>{h1}</h1>
              <p>{p}</p>
              <Numbers
                readTime={readTime}
                price={price}
                pageCount={pageCount}
              />
              <Callout summary={summary} />
              <div className="sneak-contain">
                <div className="row">
                  <h3 style={{ color: "var(--hoverBackgroundDark)" }}>
                    Sneak peak
                  </h3>
                  {/* selects id based on resource then selects sneakitems and returns the length of that array */}
                  <div className="index-contain">
                    {resourcesData[id]?.sneakItems.length}
                  </div>
                </div>

                <div className="sneak-peak-wrapper">
                  {resourcesData[id]?.sneakItems.map((sneakItem, index) => {
                    const sneakInfo = SneakData.find(
                      (sneak) =>
                        sneak.iconNameSneak === sneakItem.iconNameSneak,
                    );
                    return (
                      <SneakPeak
                        key={index}
                        iconSneak={sneakInfo.iconSneak}
                        textSneak={sneakInfo.textSneak}
                        sneakTitle={sneakItem.sneakTitle}
                        sneakDescription={sneakItem.sneakDescription}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* right panel */}
            <div className="right-resource-contain">
              <button className="main-button">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Read now
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </button>
              <div className="right-resource-item">
                <h3>One liner overview</h3>
                <div className="liner-contain">
                  <div className="mini-icon-contain">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div className="right-contain">
                    <p>CORE TOPIC</p>
                    <h4>{coreTopic}</h4>
                  </div>
                </div>
                <div className="liner-contain">
                  <div className="mini-icon-contain">
                    <FontAwesomeIcon icon={faFilter} />
                  </div>
                  <div className="right-contain">
                    <p>TYPE</p>
                    <h4>{type}</h4>
                  </div>
                </div>
                <p style={{ color: "var(--black)", fontWeight: "bolder" }}>
                  <b>Other tags</b>
                </p>
                <div className="resource-inner-tag-contain">
                  {resourcesData[id]?.selectedTopics.map(
                    (selectedTopic, index) => {
                      const topicInfo = TopicData.find(
                        (topic) =>
                          topic.iconNameTopic === selectedTopic.iconNameTopic,
                      );
                      return <Tag key={index} text={topicInfo.text} />;
                    },
                  )}
                </div>
              </div>
              <div className="right-resource-item">
                <h3>Read if...</h3>
                {resourcesData[id]?.readElements.map((readElement, index) => {
                  return (
                    <CheckContain
                      key={index}
                      readReason={readElement.readReason}
                    />
                  );
                })}
              </div>
              <div className="right-resource-item">
                <h3>Pillars</h3>
                {/* dynamically render pillar buttons based on data */}
                {/* takes the id from selectedResource state */}
                {/* finds element from resourceData that matches ID, then selects pillarButtons to map all elements within 
                    it by iterating through each element "buttonInfo" inside the array. */}
                {/* Attaches a unique index to each one for efficient iteration */}
                {resourcesData[id]?.pillarButtons.map((buttonInfo, index) => {
                  // var stores the element inside of PillarData that matches the iconName
                  // defined by each element (buttonInfo) defined under the pillarButtons array
                  const pillarInfo = PillarData.find(
                    (pillar) => pillar.iconName === buttonInfo.iconName,
                  );
                  return (
                    <PillarsButtons
                      key={index}
                      // ex: pillarInfo = element containing iconName = 'Personal'
                      icon={pillarInfo.icon}
                      text={pillarInfo.text}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <img
          src={PurpleGradient}
          style={{
            position: "absolute",
            marginRight: "-66vw",
            marginTop: "-10vh",
            top: "0",
            right: "0",
            zIndex: "1",
          }}
        />
        <img
          src={BlueGradient}
          style={{
            position: "absolute",
            marginRight: "76vw",
            marginTop: "90vh",
            top: "0",
            right: "0",
            zIndex: "1",
          }}
        />
      </section>
    </>
  );
}

export default ResourceInner;
