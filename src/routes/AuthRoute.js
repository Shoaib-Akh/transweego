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
import AddVehicles from '../Screen/Auth/signUp/IndividualSignUp/AddVehicles';

const AuthRoute = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/company-signup' element={<CompanySignup />} />
      <Route path='/individual-signup' element={<IndividualSignUp />} />
      <Route path='/add-driver' element={<AddDriver />} />

      <Route path='/individual-transporter-signup' element={<IndividualTransporterSignUp />} />
      <Route path='/Add-vehicles' element={<AddVehicles />} />

      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
};

export default AuthRoute;
