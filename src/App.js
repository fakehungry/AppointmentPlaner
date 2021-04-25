import React, {useState} from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/AppointmentPage";
import { ContactsPage } from "./containers/ContactPage";

function App() {

  const [contacts, setContacts] = useState([]);

  const addContact= (newContact) => {
    setContacts(prev => [newContact, ...prev])};

  const [appointments, setAppointments] = useState([]);

  const addAppointment = (newAppointment) => {
    setAppointments(prev => [newAppointment, ...prev])
  };

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };


  return (
    <BrowserRouter>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage 
            addContact={addContact}
            contacts={contacts}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
              addAppointment={addAppointment}
              appointments={appointments}
              contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
