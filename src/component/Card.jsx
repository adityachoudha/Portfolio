import React from 'react'

function Card(props) {
    
  return (
    <div className="card">
        <div className="compdet">
            <h3>{props.title}</h3>
            <h4 className="secondtext">{props.where}</h4>
            <h4 className='secondtext'>{props.from} - {props.to}</h4>
            <h4 className='secondtext'>CGPA = {props.CGPA}</h4>
        </div>
    </div>
  )
}

export default Card