import React from 'react';

function FaceBook({data}){
    console.log('facebook', data)

    const people = data.map( (person,index) => {
        
        return(
           
              <div key={index}>
                            <img style={{width:'100px'}} src={person.img} alt="faceBook" />
                            <p>First Name: {person.firstName} </p>
                            <p>Last Name: {person.lastName} </p>
                            <p>Country: {person.country} </p>
                            <p>Type: {person.isStudent?'student':'teacher'} </p>
              </div>
            
          )
    })

    return (
        <div>
            {people}
        </div>
    )
  }

export default FaceBook;