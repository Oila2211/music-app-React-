import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react';
import Charts from './pages/Charts/Charts';
import Catfact from './pages/Catfact/Catfact';
import Upload from './pages/Charts/Upload/Upload';
import Unlogged from './pages/Unlogged/Unlogged';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Browse from './pages/Browse/Browse';
import SingUp from './pages/SingUp/SingUp';


// import Heading from './pages/Dashboard/Heading';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/Charts' element={<Charts />} />
        <Route path='/Catfact' element={<Catfact />} />
        <Route path='/Upload' element={<Upload />} />
        <Route path='/Unlogged' element={<Unlogged />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Browse' element={<Browse />} />
        <Route path='/SingUp' element={<SingUp />} />
        <Route path='/Upload' element={<Upload />} />




        {/* <Route path='/Heading' element={<Heading />} /> */}


      </Routes>
    </div>
  );
}

export default App;
