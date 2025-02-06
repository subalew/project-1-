import React from 'react';
import { useParams } from 'react-router-dom';


// פונקציה לקבלת שירות  מבוקש 
function SingleServicePage  () {
    
    const { id } = useParams(); 
  
    const services = {
        1: { title: "תספורת גברים", description: "תספורת מקצועית לגברים" },
        2: { title: "גילוח זקן", description: "שירות גילוח זקן מלא" },
        3: { title: "עיצוב שיער", description: "עיצוב שיער מותאם אישית" },
    };
   const service = services[id];

    if (!service) {
        return <p>.שירות לא נמצא</p>;
    }

    return (
       
        <section className="service">
            
            <div className="single-service">
                <h1 className="service-title">{service.title}</h1>
                <p className="service-content">{service.description}</p>
                    </div>
                   
        </section>
       
    );
};

export default SingleServicePage;
