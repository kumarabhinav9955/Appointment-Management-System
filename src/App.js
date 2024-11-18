import React, { useState } from "react";
import "../src/App.css";
import {AppointmentForm} from "../src/Components/AppointmentForm";
import {AppointmentList} from "../src/Components/AppointmentList";
import {Navbar} from '../src/Components/Navbar/Navbar'

export const App = () => {
    const [appointments, setAppointments] = useState([]);

    const addAppointment = (appointment) => {
        setAppointments([...appointments, appointment]);
    };

    const deleteAppointment = (index) => {
        const deletedAppointments = [...appointments];
        deletedAppointments.splice(index, 1);
        setAppointments(deletedAppointments);
    };

    const editAppointment = (index, editedName, editedDate) => {
        const updatedAppointments = [...appointments];
        updatedAppointments[index] = {
            name: editedName,
            date: editedDate,
         
        };
        setAppointments(updatedAppointments);
    };

    const clearAppointments = () => {
        setAppointments([]);
    };

    return (
        <div>
            <Navbar/>
            <h1>Appointment Management System</h1>
            <AppointmentForm addAppointment={addAppointment} />
            <AppointmentList
                appointments={appointments}
                deleteAppointment={deleteAppointment}
                clearAppointments={clearAppointments}
                editAppointment={editAppointment}
            />
        </div>
    );
};

