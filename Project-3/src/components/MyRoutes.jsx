import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './HeaderPage';
import Footer from './FooterPage';
import ContactPage from './ContactPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import SingleServicePage from './SingleServicePage';
import AddService from './AddService';  
import EditService from './EditService';  
import AppointmentsManager from './Appointment';

function MyRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service/:id" element={<SingleServicePage />} />
        <Route path="/add" element={<AddService />} />
        <Route path="/edit/:id" element={<EditService />} />
        <Route path='/queue' element={<AppointmentsManager/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default MyRoutes;
