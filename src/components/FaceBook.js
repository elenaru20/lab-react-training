import React from 'react';

function FaceBook({data}){
    console.log('facebook', data)

    const people = data.map( (person,index) => {
        
        return(
           
              <div key={index} className="faceBook-Box" style={{border: "1px solid black"}}>
                            <img style={{width:'100px', marginRight:'20px'}} src={person.img} alt="faceBook" />
                            <div>
                                <p>First Name: {person.firstName} </p>
                                <p>Last Name: {person.lastName} </p>
                                <p>Country: {person.country} </p>
                                <p>Type: {person.isStudent?'Student':'Teacher'} </p>
                            </div>
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