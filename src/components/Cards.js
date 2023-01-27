import React from 'react';
import './Cards.css';
import  { Link } from 'react-router-dom';


function Cards(props) {
  return (
        <div className="card">
        <img src={props.image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title text-center">{props.title}</h5>
          <p className="card-text text-center">{props.text}</p>
          <Link to={`/cities/${props.city}`} className="btn btn-primary">More</Link>
        </div>
      </div>
  )
}
export default Cards;