import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/HomePage.css"
import AppointmentsManager  from "./Appointment"
function HomePage () {
  const services = [
    { 
      id: 1, title: "תספורת גברים", description: "תספורת מקצועית לגברים"
     },
    {
      id: 2, title: "גילוח זקן", description: "שירות גילוח זקן מלא"
       },
    {
      id: 3, title: "עיצוב שיער", description: "עיצוב שיער מותאם אישית" }
      
  ];

  return (
  <div className="main-page">
      <section className="services">
         <div className="container">
          <h1 className="main-page-title">
            ברוכים הבאים למערכת לניהול תורים</h1>
          <div className="services-container">
         {services.map(service=> (
           <div key={service.id} className="service-card">
             <h2 className="service-title">{service.title}</h2>
            <p>{service.description}</p>
             <Link to={`/service/${service.id}`}
              className='view-button' >
               View
               </Link>
          
          </div>
        ))} 
      <AppointmentsManager/>
      </div>
      
      </div >
      
    </section>
    
    </div>
   
    
  );
};

export default HomePage;
