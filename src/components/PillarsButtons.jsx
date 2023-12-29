import React from 'react'

function PillarsButtons({icon, text}) {
  return (
    <div>
      <div className="pillar-button-contain">
      
        <div className="right-contain">
        <div className="mini-icon-contain">{icon}</div>
          <h4>{text}</h4>
        </div>
        
      </div>
      
    </div>
  )
}

export default PillarsButtons
