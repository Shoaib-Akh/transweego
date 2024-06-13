import './App.scss';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Screen/Auth/signUp';
import CompanySignup from './Screen/Auth/signUp/CompanySignup';
import LandingPage from './Screen/website/LandingPage';
import IndividualSignUp from './Screen/Auth/signUp/IndividualSignUp';
import IndividualTransporterSignUp from './Screen/Auth/signUp/IndividualTransporterSignUp';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<LandingPage />} />
        <Route path='individual-transporter-SignUp' element={<IndividualTransporterSignUp />} />
        <Route path='individual-signUp' element={<IndividualSignUp/>} />
        <Route path='signup' element={<SignUp />} />
        <Route path='company-signup' element={<CompanySignup />} />
      </Routes>
    </div>
  );
}

export default App;
