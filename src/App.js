/** @format */

import "./App.css";
import MySideNave from "./components/MySideNave";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
function App() {
  return (
    <Router className='App'>
      <MySideNave />
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
