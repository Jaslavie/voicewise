// contains the initial stats for each resource when you first enter the inner page

import React from 'react'
import Icontag from './Icontag'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTag, faHashtag } from "@fortawesome/free-solid-svg-icons";

function Numbers({pageCount, readTime, price}) {

  return (
    <div>
      <div className="numbers-contain">
        <h3>The numbers</h3>
        <div className="number-items-contain">
            <div className="number-item">
              <Icontag
                icon= {<FontAwesomeIcon icon={faClock} />}
                text = 'Read time'
            />  
            <h1>{readTime}</h1>
            </div>
            
            <div className="number-item">
              <Icontag
                icon= {<FontAwesomeIcon icon={faHashtag} />}
                text = 'Page count'
            />  
            <h1>{pageCount}</h1>
            </div>

            <div className="number-item">
              <Icontag
                icon= {<FontAwesomeIcon icon={faTag} />}
                text = 'Price'
            />  
            <h1>{price}</h1>
            </div>
            

        </div>
      </div>
    </div>
  )
}


// const NumberData = [
//     {icon: <FontAwesomeIcon icon={faClock} />, text: 'Read time', iconNameNum: 'readTime'},
// ]
export default Numbers
