import React, { useState } from "react";
import "../AuthCommon.scss";
import InputField from "../../../Component/InputField";
import logo from "../../../assets/images/mainLogo.png";
import Button from "../../../Component/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../api/loginSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <div className="bg-color">
      <div className="mainBg-img">
        <div className="center-div">
          <form onSubmit={handleSubmit} className="login-div">
            <div className="text-center mb-4">
              <img src={logo} height={30} alt="car" />
            </div>
            <div className="sec-input">
              <InputField
                onChange={(e) => setUsername(e.target.value)}
                label="E-Mail/Phone number"
                placeholder="iamamember@gmail.com"
                type="text"
                value={username}
                validationMessages={{ email: 'Please enter a valid email address' }}
              />
            </div>
            <InputField
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
            />
            <Button label="Sign-in" />
        
            <div className="text-center">
              <h5 className="Forgotten">Forgotten password?</h5>
              <p className="new-user mt-4">Are you a new user? <Link to="/signup">
                <b>Sign up</b>
              </Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
