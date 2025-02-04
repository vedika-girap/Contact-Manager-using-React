import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import ContactCard from "./ContactCard"

function App() {
  const contacts= [
    {
      id:1,
      name:"Aa",
      email:"aa@gmail.com", 
    },
    {
      id:2,
      name:"Bb",
      email: "bb@gmail.com", 
    },
    {
      id:3,
      name:"Cc",
      email: "cc@gmail.com", 
    },
  ];
  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
