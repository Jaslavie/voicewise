import React, { useState } from 'react';
import Resourceitems from '../components/Resourceitems'
import ResourceInner from '../components/ResourceInner';
import resourcesData from '../data/ResourcesData';
import Nav from "../components/Nav.jsx";
import Foot from "../components/Foot.jsx"
// when you cannot nest other routers, this allows you to navigate within the route
import { useNavigate, useLocation } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import BlueGradient from "../images/blue gradient.svg";
import PurpleGradient from "../images/purple gradient.svg";


function Resources() {
  const [selectedResource, setSelectedResource] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickResource = (id) => {
    // when item is clicked, set the selectedResource to the specific id defined
     setSelectedResource(id);
     console.log(`Clicked on resource with ID: ${id}`);
     navigate(`/voicewise/resources/${id}`);
  }

  const handleBack = () => {
    setSelectedResource(null);
    navigate('/voicewise/resources');
  }

return (
    <>
   
    <Nav />
    
    <div className="container">
        {/* if a resource is selected, load resource inner, if not load default list of resources */}
    {
              selectedResource ? (
                <FadeIn>
                    <ResourceInner
                    h1={resourcesData[selectedResource].h1}
                    p={resourcesData[selectedResource].p}
                    iconNameType={resourcesData[selectedResource].iconNameType}
                    readTime = {resourcesData[selectedResource].readTime}
                    price = {resourcesData[selectedResource].price}
                    pageCount = {resourcesData[selectedResource].pageCount}
                    pillarButtons={resourcesData[selectedResource]?.pillarButtons} 
                    summary = {resourcesData[selectedResource].summary}
                    sneakItems = {resourcesData[selectedResource].sneakItems}
                    link = {resourcesData[selectedResource].link}
                    coreTopic = {resourcesData[selectedResource].coreTopic}
                    type={resourcesData[selectedResource].type}
                    onBack = {handleBack}
                    id = {selectedResource}
                    />
                 </FadeIn>
              ) : (
            <div className='resources'>
        <section>
        <FadeIn>
            <div className="head-text-contain" style={{width: '1000px' }}>
                <h1>Everything you need to <span>kickstart</span> your self-improvement journey</h1>
                <p>Tailored resources in topics ranging from career to self-improvement and mental health. Diversified for all audiences.</p>
            </div>
        </FadeIn>
        </section>
        <section>
            <div className="resources-contain">
            <FadeIn>
                {/* <div className="two-column-contain"> */}
                    {/* <div className="filter-contain">
                        <h3>placeholder</h3>
                    </div> */}
                    <div className="core-resources-contain">
                    <Resourceitems 
                        id = "mastery"
                        iconNameType="Reading"
                        h3 = "Mastery: Robert Greene"
                        p = "A modern philosophical exploration for how to acheive mastery by following what you're naturally good at."
                        iconName = "Personal"
                        // sets the id to "Mastery"
                        onClick={() => handleClickResource("mastery")}
                    />
                   
                    </div>
                
                
                {/* </div> */}
                </FadeIn>
            </div>
        </section>
        <section>
        <FadeIn>
            <div className="head-text-contain" style={{width: '800px' }}>
                <h1>Have some cool resources to add?</h1>
                <p>Recommend items for our database through the link below!</p>
                <button className="main-button">
              <a href="https://forms.gle/1e2yFBJQgEaVrJZj8" target="_blank" rel="noopener noreferrer">Suggest a Resource</a>
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
        )
        }
    </div>
    
         

    

    <Foot />
    
    </>
  );
  
}

export default Resources;
