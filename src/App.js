import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './Components/Contacts/Contacts'

const contacts = [{
      firstName: "Барней",
      lastName: "Стинсовский",
      phone: "+380956319521",
      gender: "male"
  }, 
  {
      firstName: "Робин",
      lastName: "Щербатская",
      phone: "+380931460123",
      gender: "female"
  }, 
  {
      firstName: "Аномный",
      lastName: "Анонимус",
      phone: "+380666666666"
  }, 
  {
      firstName: "Лилия",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female"
  }, 
  {
      firstName: "Маршэн",
      lastName: "Эриксонян",
      phone: "+380739432123",
      gender: "male"
  }, 
  {
      firstName: "Теодор",
      lastName: "Мотсбэс",
      phone: "+380956319521",
      gender: "male"
  },
  {
    firstName: "Теоoo",
    lastName: "Мот",
    phone: "+380956319521",
    gender: "female"
}
];

function App() {
  return (
    <Contacts data={contacts}/>
  );
}

export default App;
