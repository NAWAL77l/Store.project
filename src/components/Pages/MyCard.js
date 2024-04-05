import React from 'react'
import config from './config.json'
import '../Styles/MyCard.css'
import { Link } from 'react-router-dom';
function MyCard() {
  return (
    <div className='row'>
      {config.map((props, index) => (
        <div key={index} className="card">
          <Link to={`/card/${props.id}`}> 
            <img className="card-img-top" src={props.image_url}  />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
          </div>
        </div>
        ))}
    </div>
  )
}
export default MyCard
