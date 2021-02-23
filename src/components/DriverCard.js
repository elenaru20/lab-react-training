import React from 'react';
import Rating from './Rating';
import './style.css';

export default function DriverCard({name, rating, img, car}) {
    return (
       <div className="driverCard">
        <img src={img} alt="profile picture"/>
        <div>
            <p>{name}</p>
            <Rating>{rating}</Rating>
            <p>{car.model} - {car.licensePlate}</p>
        </div>
      </div>
    )
}