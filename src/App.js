import logo from './logo.svg';
import './App.scss';
import Home from './Screen/Home';
import About from './Screen/About';
import Contact from './Screen/Contact';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Screen/website/HomePage';
import HowItWork from './Screen/website/HowItWork';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
    <Routes> 
      <Route path='/' element={<HomePage/>} />
      <Route path='HowItWork' element={<HowItWork/>} />


    </Routes>
  </div>
  );
}

export default App;
