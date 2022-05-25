import React from 'react';
import Header from './components/Header/Header';
import Template from "./components/Template/Template";
import Mainbody from './components/Mainbody/Mainbody';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Formheader from './components/Formheader/Formheader';
import CenteredTabs from './components/Tabs/Tabs';
import Question_form from './components/Question/Question_form';
import User_form from './components/Userform/user_form';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/form/:id" element={<><Formheader/><CenteredTabs/></>}/>
          <Route path="/response" element={<><User_form/></>}/>
          <Route path="/" element={<><Header/><Template/><Mainbody/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
