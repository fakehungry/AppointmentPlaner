import React, {useState} from "react";
import { AppointmentForm } from "../componets/AppointmentForm";


export const AppointmentsPage = (props) => {

 const [title, setTitle] = useState('');
 const handleTitleChange = (event) => {
   setTitle(event.target.value);
 };
 
 const [date, setDate] = useState('');
 const handleDateChange = (event) => {
   setDate(event.target.value);
 };

 const [time, setTime] = useState('');
 const handleTimeChange = (event) => {
   setTime(event.target.value);
 };

 const [contact, setContact] = useState('');
 const handleContactChange = (event) => {
   setContact(event.target.value);
 };

 const [key,setKey] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();
  
   const appointment = {
     key: key+1,
     title: title,
     date: date,
     time: time,
     contact: contact
   };
   if (title.length > 0 && date !== '' && time !== '' && contact){
     props.addAppointment(appointment);
     setTitle('');
     setTime('');
     setDate('');
     setContact('');
     setKey(key+1);
   } 
  };

  return (
    <div>
      <section>
        <AppointmentForm
          contact={contact}
          title={title}
          time={time}
          date={date}
          key={key}
          contacts={props.contacts}
          appointments={props.appointments}
          handleTitleChange={handleTitleChange}
          handleDateChange={handleDateChange}
          handleTimeChange={handleTimeChange}
          handleContactChange={handleContactChange}
          handleSubmit={handleSubmit}
          />
      </section>
    </div>
  );
};
