import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function CheckContain({readReason}) {
  return (
    <div className="liner-contain">
                        <div className="check-contain">
                            <FontAwesomeIcon icon={faCheck}/>
                        </div>
                        <div className="right-contain">
            
                            <h4>{readReason}</h4>
                        </div>
    </div>
  )
}

export default CheckContain
