import Icontag from '../components/Icontag'
import PillarData from '../data/PillarData'
import TypeData from '../data/TypeData'
import TopicData from '../data/TopicData';
import Tag from '../components/Tag'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Numbers from './Numbers';
import NumbersData from './Numbers'
import PillarsButtons from './PillarsButtons';


function ResourceInner({h1, p, iconNameType, onBack, readTime, price, pageCount, iconName}) {
    const selectedPillar = PillarData.find(pillar => pillar.iconName === iconName);
    const selectedType = TypeData.find((type) => type.iconNameType === iconNameType);
    const handleBack = () => {
        if (onBack) {
            onBack();
        }
    }
  return (
    <>
      <section>
        
        <div className="resource-inner-contain">
            {/* back link */}
            <button>
               <Link to="/voicewise/resources" onClick={onBack} className='navigate-button'>
                <FontAwesomeIcon icon={faArrowLeft} />
                <p>Go Back</p>
            </Link> 
            </button>
            
          <div className="two-column-contain">
            <div className="left-resource-contain">
                <Icontag 
                    icon = {selectedType.icon}
                    text = {selectedType.text}
                />
                <h1>{h1}</h1>
                <p>{p}</p>
                <Numbers
                    readTime = {readTime}
                    price = {price}
                    pageCount = {pageCount}
                />
             </div>
             <div className="right-resource-contain">
                <div className="right-resource-item">
                    <h3>Pillars</h3>
                    {/* <PillarsButtons
                        icon = {selectedPillar.icon}
                        text = {selectedPillar.text}
                    />
                    <PillarsButtons
                        icon = {selectedPillar.icon}
                        text = {selectedPillar.text}
                    />
                    <PillarsButtons
                        icon = {selectedPillar.icon}
                        text = {selectedPillar.text}
                    /> */}
                </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResourceInner;
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import resourcesData from '../data/ResourcesData';
// import Icontag from '../components/Icontag';

// function ResourceInner() {
//   const { id } = useParams();
//   const selectedResource = resourcesData[id];

//   if (!selectedResource) {
//     return <div>Resource not found</div>;
//   }

//   return (
//     <section>
//       <div className="resource-inner-contain">
//         <div className="two-column-contain">
//           <h3>{selectedResource.h3}</h3>
//           <Icontag iconNameType={selectedResource.iconNameType} />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ResourceInner;