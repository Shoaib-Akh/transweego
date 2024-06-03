// src/Login.js
import React, { useState } from "react";
import "../common.scss";
import InputField from "../../../Componnet/InputField";
import logo from "../../../assets/images/mainLogo.png";
import Button from "../../../Componnet/Button";
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
      <div className="mainBg-img ">
        <div className="center-div">
          <form onSubmit={handleSubmit} className="login-div">
            <div className="text-center mb-4">
              <img src={logo} height={30} alt="car" />
            </div>

            <InputField
              onChange={(e) => setUsername(e.target.value)}
              lable={"E-Mail/Phone number"}
              placeholder={"iamamember@gmail.com"}
            />
            <InputField
              onChange={(e) => setPassword(e.target.value)}
              lable={"Password"}
              placeholder={"Enter your password"}
              type="password"
            />

            <Button label={"Sign-in"} />
            <div className="text-center">
              <h5 className="Forgotten">Forgotten password?</h5>
              <p className="new-user mt-4">Are you new user? <Link to="/signup" >
                <b>Sign up</b>
              </Link> </p>
            </div>
          </form>


        </div>
      </div>
    </div>
  );
};

export default Login;
