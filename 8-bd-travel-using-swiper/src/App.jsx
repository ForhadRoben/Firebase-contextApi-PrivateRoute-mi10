// import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import './App.css'

const App = () => {

  return (
    <div className='main-bg container mx-auto flex flex-col justify-center h-screen'>
      <div >
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;