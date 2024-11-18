

import React, { useState } from "react";

export  const AppointmentForm = ({ addAppointment }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [number,setNumber]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addAppointment({ name, date,number });
        setName("");
        setDate("");
        setNumber("");
    };

    return (
        <div class="container">
            <form onSubmit={handleSubmit}>
                <div class="row">
                    <div class="col-25">
                        <label for="fname">Full Name</label>
                    </div>
                    <div class="col-75">
                        <input
                            type="text"
                            id="fname"
                            name="firstname"
                            placeholder="Your name.."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
               
                <div class="row">
                    <div class="col-25">
                        <label for="fname">Appointment Date: </label>
                    </div>
                    <div class="col-75">
                        <input
                            id="fname"
                            name="firstname"
                            placeholder="Your name.."
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>
                <div class="row">
                    <input type="submit" value="Add Appointment" />
                </div>
            </form>
        </div>
    );
};


