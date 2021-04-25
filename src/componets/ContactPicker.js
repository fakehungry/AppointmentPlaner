import React from "react";

export const ContactForm = (props) => {

  return (
    <div>
        <select onChange={props.handleContactChange}>
          <option value="unknown">No contact selected</option>
          {props.contacts.map(cont =>
          <option value={cont.name} >{cont.name}</option>
          )}
        </select>
    </div>
  );
};