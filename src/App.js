import logo from './logo.svg';
import './App.scss';

import { Route, Routes } from 'react-router-dom';
import HomePage from './Screen/website/HomePage';
import HowItWork from './Screen/website/HowItWork';
import Login from './Screen/Auth/login';
import SignUp from './Screen/Auth/signUp';
import ComponySignUp from './Screen/Auth/signUp/ComponySignUp';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='HowItWork' element={<HowItWork />} />
        <Route path='login' element={<Login />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='ComponySignUp' element={<ComponySignUp />} />





      </Routes>
    </div>
  );
}

export default App;
