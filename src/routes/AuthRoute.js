// src/routes/AuthRoute.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../Screen/Auth/signUp';
import CompanySignup from '../Screen/Auth/signUp/CompanySignup';
import IndividualSignUp from '../Screen/Auth/signUp/IndividualSignUp';
import IndividualTransporterSignUp from '../Screen/Auth/signUp/IndividualTransporterSignUp';
import Login from '../Screen/Auth/login';
import NoMatch from '../Screen/NoMatch';
import AddDriver from '../Screen/Auth/signUp/CompanySignup/AddDriver';
import IndividualTransportAddVehicles from '../Screen/Auth/signUp/IndividualTransporterSignUp/IndividualTransportAddVehicles';
import IndividualAddVehicles from '../Screen/Auth/signUp/IndividualSignUp/IndividualAddVehicles';
import AuthorizationCodeModal from ".././Component/Modal/AuthorizationCode"
import VerifyEmail from '../Screen/Auth/VerifyEmail';
const AuthRoute = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/company-signup' element={<CompanySignup />} />
      <Route path='/individual-signup' element={<IndividualSignUp />} />
      <Route path='/individual-add-vehicles' element={<IndividualAddVehicles />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      
      <Route path='/add-driver' element={<AddDriver />} />

      <Route path='/individual-transporter-signup' element={<IndividualTransporterSignUp />} />
      <Route path='/individual-transport-AddVehicles' element={<IndividualTransportAddVehicles />} />

      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
};

export default AuthRoute;
