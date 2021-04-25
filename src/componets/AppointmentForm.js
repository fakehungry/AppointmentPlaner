import React from "react";
import { TileList } from "./TileList";
import { ContactForm } from "./ContactPicker";

export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-UK")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
    <section>
      <form onSubmit={props.handleSubmit}>
        <input type="text" value={props.title} onChange={props.handleTitleChange} placeholder="Title"/>
        <input type="date" value={props.date} onChange={props.handleDateChange} min={getTodayString} />
        <input type="time" value={props.time} onChange={props.handleTimeChange} />
        <ContactForm contacts={props.contacts} handleContactChange={props.handleContactChange} contact={props.contact}/>
        <p>{props.contact}</p>
        <button type="submit">Save</button>
      </form>
    </section>
    <hr />
    <section>
      <h2>Appointments</h2>
      <TileList arr={props.appointments}/>
    </section>
    </div>
  );
};
