import React from 'react';

function NumbersTable({limit}){
    const table = [];
    for (let i = 1; i <= limit; i++){
      if (i % 2 === 0){
        table.push(
          <div key={i} style={{width:"100px",height:"100px",backgroundColor:"red", border: "1px solid black", display:"flex", justifyContent:"center", alignItems:"center"}}>
            {i}
          </div>
        )
      } else {
        table.push(
          <div key={i} style={{width:"100px",height:"100px",backgroundColor:"white", border: "1px solid black", display:"flex", justifyContent:"center", alignItems:"center"}}>
            {i}
          </div>
        )
      }
    }
    return(
      <div style={{display:"flex",flexWrap:"wrap",width:"530px"}}>
        {table}
      </div>
    )
  }

export default NumbersTable;