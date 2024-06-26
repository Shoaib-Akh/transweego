import logo from './logo.svg';
import './App.scss';

import { Route, Routes } from 'react-router-dom';
import HomePage from './Screen/website/HomePage';
import HowItWork from './Screen/website/HowItWork';
import Login from './Screen/Auth/login';
import SignUp from './Screen/Auth/signUp';
import CompanySignup from './Screen/Auth/signUp/CompanySignup';
import AddDriver from './Screen/Auth/signUp/CompanySignup/AddDriver';
import LandingPage from './Screen/website/LandingPage';
import IndividualSignUp from './Screen/Auth/signUp/IndividualSignUp';
import IndividualTransporterSignUp from './Screen/Auth/signUp/IndividualTransporterSignUp';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
      <Route path='/' element={<LandingPage />} />
      
        <Route path='individual-transporter-SignUp' element={<IndividualTransporterSignUp />} />
        <Route path='HowItWork' element={<HowItWork />} />
        <Route path='individual-signUp' element={<IndividualSignUp/>} />

        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='company-signup' element={<CompanySignup />} />
        <Route path='AddDriver' element={<AddDriver />} />

      </Routes>
    </div>
  );
}

export default App;
