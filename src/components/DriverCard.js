import React from 'react';
import Rating from './Rating'

export default function DriverCard({name, rating, img, car}) {
    return (
       <div>
        <p>{name}</p>
        <Rating>{rating}</Rating>
        <img src={img} alt="profile picture"/>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    )
}