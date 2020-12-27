import React from 'react';

const Card = (props) => {
  return (
    <div className="card" onClick={props.scoreFunc} id={props.name}>
      <img src={props.path} alt={props.name} className="card-img"/>
      <p>{props.name}</p>
    </div>
  );
}


export default Card;
