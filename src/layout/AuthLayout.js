// src/components/AuthLayout.js

import React from 'react';
import PropTypes from 'prop-types';
import '../../src/Screen/Auth/AuthCommon.scss';

import { useNavigate } from 'react-router-dom';
import Button from "../Component/Button"
const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-color">
      <div className="mainBg-img">
      <Button
            onClick={() => navigate(-1)}
            style={{}}
            className="backbtn"
            icon
            
          />
        <div className="AuthLayout_center">
          
          
          {children}
        </div>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
