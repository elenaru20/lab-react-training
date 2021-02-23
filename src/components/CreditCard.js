import React from 'react';

export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
let source;
if (type === "Visa") {source = "img/visa.png"}
if (type === "Master Card") {source = "img/master-card.svg"}

const num = number.slice(-4)
const dots = "•••• •••• •••• "

let month = expirationMonth.toString();
if (month.length < 2) {
    month = "0"+expirationMonth;
} else {
    month = expirationMonth;
}

let year = expirationYear.toString().slice(-2)

let styling = {
    color: color,
    backgroundColor: bgColor
}

    return (
       <div style={styling}>
           <img src={source} alt="bankLogo" />
           <p>{dots}{num}</p>
           <p>{month}/{year}</p>
           <p>{bank}</p>
           <p>{owner}</p>
       </div>
    )
}