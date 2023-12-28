import React, { useState } from 'react';
import Resourceitems from '../components/Resourceitems'
import ResourceInner from '../components/ResourceInner';
import resourcesData from '../data/ResourcesData';
import Nav from "../components/Nav.jsx";
import Foot from "../components/Foot.jsx"
// when you cannot nest other routers, this allows you to navigate within the route
import { useNavigate, useLocation } from 'react-router-dom';


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
                <ResourceInner
                  h1={resourcesData[selectedResource].h1}
                  p={resourcesData[selectedResource].p}
                  iconNameType={resourcesData[selectedResource].iconNameType}
                  readTime = {resourcesData[selectedResource].readTime}
                  price = {resourcesData[selectedResource].price}
                  pageCount = {resourcesData[selectedResource].pageCount}
                  onBack = {handleBack}
                />
              ) : (
            <div className='resources'>
        <section>
            <div className="head-text-contain" style={{width: '1000px' }}>
                <h1>Everything you need to <span>kickstart</span> your self-improvement journey</h1>
                <p>Tailored resources in topics ranging from career to self-improvement and mental health. Diversified for all audiences.</p>
            </div>
        </section>
        <section>
            <div className="resources-contain">
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
                
            </div>
        </section>
        </div>
        )
        }
    </div>
    
         

    

    <Foot />
    
    </>
  );
  
}

export default Resources;
