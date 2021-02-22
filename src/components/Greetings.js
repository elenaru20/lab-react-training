import React from 'react';

export default function Greetings({lang, children}) {
    let greeting;
    if (lang === "de") {
       greeting = "Hallo"
    }
    if (lang === "fr") {
        greeting = "Bonjour"
     }
    if (lang === "es") {
    greeting = "Hola"
    }
    if (lang === "en") {
        greeting = "Hello"
    }
    

    return (
        <div>
           {greeting} {children}
        </div>
    )
}