import React from 'react';
import './styles/App.css'
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/app-router/AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
