import React from 'react'

function TipCalculator(props) {
  return (
    <div>
      <p>
        <h2>Total = {props.total}</h2>
      </p>
      <p>
        <h2>Percentage = {props.percentage}</h2>
      </p>
      <p>
        <h2>Tip = {props.total*(props.percentage/100)}</h2>
      </p>
        


    </div>
  )
}

export default TipCalculator