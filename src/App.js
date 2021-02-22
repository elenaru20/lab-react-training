import React from 'react';
//import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'

function App() {
  return (
      <div> 
          <IdCard 
            firstName="Doe" 
            lastName="John"
            gender='male'
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
          <Greetings lang="es">Pablo</Greetings>
          <Greetings lang="en">Sara</Greetings>

          <Random min={1} max={6}/>
          <Random min={1} max={100}/>

          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />

          <CreditCard
            type="Visa"
            number="0123456789018845"
         />
         <CreditCard
            type="Master Card"
            number="0123456789010995"
          />
      </div>
  );
}

export default App;

// number="0123456789018845"
// expirationMonth={3}
// expirationYear={2021}
// bank="BNP"
// owner="Maxence Bouret"
// bgColor="#11aa99"
// color="white"
