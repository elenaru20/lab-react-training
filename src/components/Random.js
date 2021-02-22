import React from 'react';

export default function Random({min, max}) {
    let num;
    num = Math.floor(Math.random() * Math.floor(max) + min);
    
    return (
        <div>
           {num}
        </div>
    )
}