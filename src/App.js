import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './components/MyRoutes';
import  './App.css'
// מיכאל אווקה 
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
