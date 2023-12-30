import { useState, useEffect } from "react";
import Resourceitems from "../components/Resourceitems";
import ResourceInner from "../components/ResourceInner";
import resourcesData from "../data/ResourcesData";
import Nav from "../components/Nav.jsx";
import Foot from "../components/Foot.jsx";
// when you cannot nest other routers, this allows you to navigate within the route
import { useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in";
import BlueGradient from "../images/blue gradient.svg";
import PurpleGradient from "../images/purple gradient.svg";
import PillarData from "../data/PillarData.jsx";

// filter elements inside of the resources page
export default function Filter() {
//   handle clicked resources
  const [selectedResource, setSelectedResource] = useState(null);
  const navigate = useNavigate();

  const handleClickResource = (id) => {
    // when item is clicked, set the selectedResource to the specific id defined
    setSelectedResource(id);
    console.log(`Clicked on resource with ID: ${id}`);
    navigate(`/voicewise/resources/${id}`);
  };

  const handleBack = () => {
    setSelectedResource(null);
    navigate("/voicewise/resources");
  };

  // [ ] is an empty array of filter categories that have been selected. In this instance, none.
  const [selectedFilters, setSelectedFilters] = useState([]);
  // sets initial state of filtereditems to all elements inside of resourcesData
  const [filteredItems, setFilteredItems] = useState(resourcesData);
  // extract icon name values from pillar data and use them as filters
  // map is used to transform each data value "pillar" inside PillarData into an array
  let filters = PillarData.map((pillar) => pillar.iconName);

  // when the user clicks on a filter button like "personal"
  const handleFilterButtonClick = (selectedCategory) => {
    // if the user's selected filters already includes this new selected category, remove it.
    // This means that the user is trying to toggle off this filter
    if (selectedFilters.includes(selectedCategory)) {
      // create a new filter array that keeps all elements that are not = to the selected category
      let filters = selectedFilters.filter(
        (element) => element !== selectedCategory,
      );
    //   sets "selectedFilters" to the new array
      setSelectedFilters(filters);
    } else {
      // if the selected category is not already included in the array, switch the entire array into the new selected category
      // note that this is initialed to an empty array, initially
      setSelectedFilters([selectedCategory]);
    }
  };
  // useEffect is used to perform a "side" function after a component has been rendered. here, it's to trigger the filtering function
  // run filterItems() function whenever the selectedFilters array is changed
  useEffect(() => {
    const filterItems = () => {
        // if there is stuff in the array, meaning the user has selected filters
      if (selectedFilters.length > 0) {
        // Object.values transforms each object element in resourcesData into an array stored in tempItems
        let tempItems = Object.values(resourcesData).filter((item) =>
          item.pillarButtons.some((btn) => btn.iconName === selectedFilters[0]),
        );
        setFilteredItems(tempItems);
      } else {
        setFilteredItems(Object.values(resourcesData));
      }
    };

    filterItems();
  }, [selectedFilters]);

  return (
    <div>
      <Nav />

      <div className="container">
        {/* if a resource is selected, load resource inner, if not load default list of resources */}
        {selectedResource ? (
          <FadeIn>
            <ResourceInner
              h1={resourcesData[selectedResource].h1}
              p={resourcesData[selectedResource].p}
              iconNameType={resourcesData[selectedResource].iconNameType}
              readTime={resourcesData[selectedResource].readTime}
              price={resourcesData[selectedResource].price}
              pageCount={resourcesData[selectedResource].pageCount}
              pillarButtons={resourcesData[selectedResource]?.pillarButtons}
              summary={resourcesData[selectedResource].summary}
              sneakItems={resourcesData[selectedResource].sneakItems}
              link={resourcesData[selectedResource].link}
              coreTopic={resourcesData[selectedResource].coreTopic}
              type={resourcesData[selectedResource].type}
              onBack={handleBack}
              id={selectedResource}
            />
          </FadeIn>
        ) : (
          <div className="resources">
            <section>
              <FadeIn>
                <div className="head-text-contain" style={{ width: "1000px" }}>
                  <h1>
                    Everything you need to <span>kickstart</span> your
                    self-improvement journey
                  </h1>
                  <p>
                    Tailored resources in topics ranging from career to
                    self-improvement and mental health. Diversified for all
                    audiences.
                  </p>
                </div>
              </FadeIn>
            </section>
            <section>
              {/* filter buttons */}
              <div className="filter-buttons">
                {/* from the filtered array, map each element to a button */}
                {/* category represents each element in the filters array: iconName */}
                {filters.map((category, index) => {
                  const pillarInfo = PillarData.find(
                    (pillar) => pillar.iconName === category,
                  );

                  return (
                    <button
                      key={index}
                    //   sets the "selectedCategory" prop to category 
                      onClick={() => handleFilterButtonClick(category)}
                      className={`filter-button ${
                        selectedFilters?.includes(category) ? "active" : ""
                      }`}
                    >
                      {/* returns the text and icon corresponding to iconName */}
                      <div className="icon">
                      {pillarInfo.icon}
                      </div>
                      
                      {pillarInfo.text}
                    </button>
                  );
                })}
              </div>
              {/* filtered elements */}
              <div className="resources-contain">
                <FadeIn>
                  <div className="core-resources-contain">
                    {Object.values(filteredItems).map((item, index) => (
                      <Resourceitems
                        key={index}
                        id={item.id}
                        iconNameType={item.iconNameType}
                        h3={item.h1}
                        p={item.p}
                        iconName={item.iconName}
                        onClick={() => handleClickResource(item.id)}
                      />
                    ))}
                  </div>
                </FadeIn>
              </div>
            </section>
            <section>
              <FadeIn>
                <div className="head-text-contain" style={{ width: "800px" }}>
                  <h1>Have some cool resources to add?</h1>
                  <p>
                    Recommend items for our database through the link below!
                  </p>
                  <button className="main-button">
                    <a
                      href="https://forms.gle/1e2yFBJQgEaVrJZj8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Suggest a Resource
                    </a>
                  </button>
                </div>
              </FadeIn>
            </section>
            <img
              src={PurpleGradient}
              style={{
                position: "absolute",
                marginRight: "-66vw",
                marginTop: "-85vh",
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
                marginTop: "40vh",
                top: "0",
                right: "0",
                zIndex: "1",
              }}
            />
          </div>
        )}
      </div>

      <Foot />
    </div>
  );
}
