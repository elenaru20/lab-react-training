import React from 'react';

export default function CreditCard({type, number}) {
let source;
if (type === "Visa") {source = "img/visa.png"}
if (type === "Master Card") {source = "img/master-card.svg"}

const num = number.slice(-4)
const dots = "•••• •••• •••• "


    return (
       <div>
           <img src={source} alt="bankLogo" />
           <p>{dots}{num}</p>
       </div>
    )
}

//number, expirationMonth, expirationYear, bank, owner, bgColor, color