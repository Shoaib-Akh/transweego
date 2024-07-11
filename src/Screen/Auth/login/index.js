import React, { useState } from "react";
import "../AuthCommon.scss";
import InputField from "../../../Component/InputField";
import Button from "../../../Component/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/slice/loginSlice';
import AuthLayout from "../../../layout/AuthLayout"; // Adjust the path as needed
import { Images } from "../../../utils/images";
import CustomModal from "../../../Component/Modal/CustomModal";
import SendEmailModal from "../../../Component/Modal/SendEmail";
import AuthorizationCode from "../../../Component/Modal/AuthorizationCode";
import ForgetEmail from "../../../Component/Modal/ForgetEmail";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
//   const status = useSelector((state) => state.user.status);
//  console.log("status",status);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password }));
      setTimeout(() => {
        AuthorizationHandleOpen(true);
      }, 2000);
    }
  };

  const [SendEmail, setSendEmail] = useState(false);
  const EmailHandleOpen = () => setSendEmail(true);
  const EmailHandleClose = () => setSendEmail(false);

  const [Authorization, setAuthorization] = useState(false);
  const AuthorizationHandleOpen = () => setAuthorization(true);
  const AuthorizationHandleClose = () => setAuthorization(false);
  const [Forget, setForget] = useState(false);
  const ForgetEmailHandleOpen = () => setForget(true);
  const ForgetEmailHandleClose = () => setForget(false);

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="login-div" style={{ maxWidth: "unset", width: 400 }}>
        <div className="text-center mb-4">
          <img src={Images.mainLogo} height={30} alt="logo" />
        </div>
        <div className="sec-input">
          <InputField
            onChange={(e) => setEmail(e.target.value)}
            label="E-Mail/Phone number"
            placeholder="iamamember@gmail.com"
            type="text"
            value={email}
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
        <Button 
          label="Sign-in"
          // loading={status }
        />

        <div className="text-center">
          <h5 className="Forgotten" onClick={ForgetEmailHandleOpen}>Forgotten password?</h5>
          <p className="new-user mt-4">Are you a new user? <Link to="/signup">
            <b>Sign up</b>
          </Link></p>
        </div>
      </form>
      <SendEmailModal
        open={SendEmail}
        handleOpen={EmailHandleOpen}
        handleClose={EmailHandleClose}
      />
      <AuthorizationCode
        email={email}
        open={Authorization}
        handleOpen={AuthorizationHandleOpen}
        handleClose={AuthorizationHandleClose}
      />
      <ForgetEmail
        open={Forget}
        handleOpen={ForgetEmailHandleOpen}
        handleClose={ForgetEmailHandleClose}
      />
    </AuthLayout>
  );
};

export default Login;
