import './App.css';
import React, { useState } from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
    msg : message,
    type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeCLasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
  }

  let toggleMode =(cls)=>{
    removeCLasses();
    document.body.classList.add('bg-'+cls);
    if(cls === 'light'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#043752';
    }
  }

  return (
    <>
    <Router>
    <Navbar title= "TeXTUtiLS" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm mode={mode} showAlert={showAlert} toggleMode={toggleMode}/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
