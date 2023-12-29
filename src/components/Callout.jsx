import React from 'react'

function Callout({summary}) {
  return (
    <div className='summary-contain'>
      <h2>🧠</h2>
      <div className="right-contain">
        <h3>Speedrun summary</h3>
        <p>{summary}</p>
      </div>
    </div>
  )
}

export default Callout
