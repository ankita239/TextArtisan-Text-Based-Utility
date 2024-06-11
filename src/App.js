
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const[myState, setmyState] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toggleMode = () => {
    console.log('Toggle mode called');
    console.log('Current state:', myState);
    if(myState === 'light') {
      setmyState('dark');
      document.body.style.backgroundColor = '#08082D';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled","success");
      document.title = "TextUtils - Dark Mode"
    } else {
      setmyState('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled","success");
      document.title = "TextUtils - Text Base Utiity"
    }
  }
  // if(myState === 'dark')
  //   {
  //     document.body.style.backgroundColor = '#08082D';
  //     document.body.style.color = 'white';
  //   }
  // else{
  //   document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  // }
  
  return (
    <Router>
    <Navbar aboutName='About Us' toggleMode={toggleMode} bgcolor={myState} />
    <Alert alert={alert} />
    <Routes>
      <Route exact path="/about" element={<About mode={myState} />} />
      <Route exact path="/" element={<TextForm heading="Enter Your Text To Be Analysed Below" mode={myState} showAlert={showAlert} />} />
      <Route exact path="/contact" element={<Contact mode={myState}/>}/>
    </Routes>
  </Router>
   
  );
}
export default App;

