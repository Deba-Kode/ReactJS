import "./App.css";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode Enabled","success");
      document.title = "MCA ERP PAGE - Dark";
      // setInterval(() => {
      //   document.title = "Install App 1";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install App 2";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled","success");
      document.title = "MCA ERP PAGE - Light";
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} Heading="Enter the text to analyze" mode={mode} />


      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}></Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} Heading="Enter the text to analyze" mode={mode} />}></Route> */}
      {/* </Routes> */}

      
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
