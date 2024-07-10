import React from 'react';

const Card = ({ car }) => {
  return (
    <div className="card">
      <img src={car.image} alt={car.model} />
      <h3>{car.model}</h3>
      <p>Price per day: ${car.price_per_day}</p>
    </div>
  );
};

export default Card;