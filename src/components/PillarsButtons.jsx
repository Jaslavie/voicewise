import React from 'react'

function PillarsButtons({icon, h3}) {
  return (
    <div>
      <div className="pillar-button-contain">
      
        <div className="right-contain">
        <div className="mini-icon-contain">{icon}</div>
          <h3>{h3}</h3>
        </div>
        
      </div>
      
    </div>
  )
}

export default PillarsButtons
