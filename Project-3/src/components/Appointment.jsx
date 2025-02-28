import React, { useState } from "react";
import '../assets/styles/Appointments.css'




function AppointmentsManager() {
    const [appointments, setAppointments] = useState(
        [{ id: 1, name: "יוסי כהן", service: "תספורת גברים", date: "2025-02-05", time: "10:00" },
        { id: 2, name: "דני לוי", service: "עיצוב שיער", date: "2025-02-06", time: "12:30" },]);

    const [newAppointment, setNewAppointment] = useState({
        name: "",
        service: "",
        date: "",
        time: "",
        
    });
    // Event handler to update state when the input value changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAppointment((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addAppointment = () => {
        if (!newAppointment.name || !newAppointment.date || !newAppointment.time) {
            alert("נא למלא את כל השדות!");
            return;
        }

        setAppointments((prev) => [
            ...prev,
            { id: prev.length + 1, ...newAppointment },
        ]);

        setNewAppointment({ name: "", service:"" ,date: "", time: ""});
    };


    return (
        <div className="appointments-manager "> 
            <h2>ניהול תורים</h2>

        
            {/*  טופס הוספת תור חדש */}
            <div className="add-appointment input">
       
                <label>
               שם
                    <input
                        type="text"
                        name="name"
                        value={newAppointment.name}
                        onChange={handleInputChange}
                    />
                    </label>
                  
                    <label>
                        שירות
                <input 
                type="text"
                name="service"
                value={newAppointment.service}
                onChange={handleInputChange}
                    />
                    </label>
               
            <label>
            תאריך
                <input
                    type="date"
                    name="date"
                    value={newAppointment.date}
                    onChange={handleInputChange}
                />
               
            </label>
          <label>
          שעה
                 <input
                    type="time"
                    name="time"
                    value={newAppointment.time}
                    onChange={handleInputChange}
                />
                </label>

                <button onClick={addAppointment}>➕ הוסף תור </button>
               
         </div>
                {/*  הצגת רשימת התורים */}
                <div>
                <ul className="appointments-list" >
                    {appointments.length > 0 ? (
                        appointments.map((appointment) => (
                            <li key={appointment.id} className="appointment-item">
                                {appointment.name} --
                                 {appointment.service} - -
                                {appointment.date} --
                                 {appointment.time}--
                               </li>
                            
                        ))
                    ) : (
                        <p>אין תורים זמינים כרגע</p>
                    )}
                </ul>
                </div>
           
            
       </div>
       
    );
}

export default AppointmentsManager;
