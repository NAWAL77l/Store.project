import React from 'react';
import { useParams } from 'react-router-dom';
import config from './config.json';
import '../Styles/CardDetails.css'
function CardDetails() {
  const { id } = useParams();
  const card = config.find(card => card.id === parseInt(id));
  return (
    <div className='container'>
      <h1 >{card.name}</h1>
      <img  src={card.image_url} alt={card.name} />
      <p>{card.description}</p>
      {card.price}
      {card.currency}
      {card.stock}
    </div>
  );
}
export default CardDetails;


