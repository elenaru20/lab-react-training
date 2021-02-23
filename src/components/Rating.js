import React from 'react';

export default function Rating({children}) {

let numOfFullStars = Math.round(children);

let numOfEmptyStars = 5 - numOfFullStars;

let strRating = "";
console.log(strRating)
for (let i = 0; i<numOfFullStars; i++) {
    console.log(strRating)
    strRating += "★"
}

for (let i = 0; i<numOfEmptyStars; i++) {
    strRating += "☆"
}

console.log(strRating)

    return (
       <div>
        {strRating}
        
       {/* alternative: */}
      {/* <big>{'★'.repeat(Math.floor(children))}</big>
      <big>{'☆'.repeat(5 - Math.floor(children))}</big> */}

      </div>
    )
}