import React from 'react'

const Card = (props) => {
  return (
    <div>
       <div className="cards">
    <div className="card">
      <img className="card-img-top" src={props.imgsrc} alt="Card cap"/>
    <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">A Netflix Original Series.</p>
    <a href={props.link} class="btn btn-primary" target='blank'>Watch Now</a>
  </div>
 </div>
</div>
    </div>
  )
}

export default Card
