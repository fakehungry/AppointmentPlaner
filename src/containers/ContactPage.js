import React, { useState } from "react";
import {ContactForm} from "../componets/ContactForm";


export const ContactsPage = (props) => {

  const [name, setName] = useState('');
  const handleNameChange =(event) =>{
    setName(event.target.value);
  };

  const [email, setEmail] = useState('');
  const handleEmailChange = (event) =>{
    setEmail(event.target.value);
  };

  const [phone, setPhone] = useState('');
  const handlePhoneChange = (event) =>{
    setPhone(event.target.value);
  };

  const [key, setKey] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const contact = {
      key: key + 1,
      name: name,
      email: email,
      phone: phone
    };
 
    const duplicateName = props.contacts.every(cont=> cont.name !== contact.name);
    const duplicateEmail = props.contacts.every(cont=> cont.email !== contact.email);
    const duplicatePhone = props.contacts.every(cont=> cont.phone !== contact.phone);
    
 


    if(duplicateName && duplicateEmail && duplicatePhone){
      props.addContact(contact);
      setName('');
      setPhone('');
      setEmail('');
      setKey(key + 1);
    }else if (!duplicateName){
      alert(`Name: ${contact.name} is already in your contact list`);
    }else if (!duplicateEmail){
      alert(`Email: ${contact.email} is already in your contact list`);
    }else if (!duplicatePhone){
      alert(`Name: ${contact.phone} is already in your contact list`);
    }
    
  };


  return (
    <div>
      <ContactForm
        name={name}
        phone={phone}
        email={email}
        contacts={props.contacts}
        handleSubmit={handleSubmit}
        handleEmailChange={handleEmailChange}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      />
    </div>
  );
};
