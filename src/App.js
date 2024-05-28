import logo from './logo.svg';
import './App.css';
import Home from './Screen/Home';
import About from './Screen/About';
import Contact from './Screen/Contact';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Screen/Auth/login';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  </div>
  );
}

export default App;
