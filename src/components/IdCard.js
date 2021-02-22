import React from 'react';

export default function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return (
        <div>
            <h1>First name: {firstName}</h1>
            <h1>Last name: {lastName}</h1>
            <h1>Gender: {gender}</h1>
            <h1>Height: {height}</h1>
            <h1>Birth: {birth.toLocaleDateString()}</h1>
            <img src={picture} alt="ID image"/>
        </div>
    )
}