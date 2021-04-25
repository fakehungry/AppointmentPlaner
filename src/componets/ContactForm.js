import React from "react";
import {TileList} from "./TileList"

export const ContactForm = (props) => {
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <form onSubmit={props.handleSubmit}>
          <input type='text' value={props.name} onChange={props.handleNameChange} placeholder='Enter name'/>
          <input type='email' value={props.email} onChange={props.handleEmailChange} placeholder='Enter e-mail'/>
          <input type='number' value={props.phone} onChange={props.handlePhoneChange} placeholder='Enter phone number'/>
          <button type='submit'>Save</button>
        </form> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arr={props.contacts}/>
      </section>
    </div>
  );
};