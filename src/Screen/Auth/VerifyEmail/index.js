import React, { useState, useEffect } from "react";
import "../AuthCommon.scss";
import InputField from "../../../Component/InputField";
import Button from "../../../Component/Button";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/slice/loginSlice';
import AuthLayout from "../../../layout/AuthLayout"; // Adjust the path as needed
import { Images } from "../../../utils/images";
import CustomModal from "../../../Component/Modal/CustomModal";
import SendEmailModal from "../../../Component/Modal/SendEmail";
import AuthorizationCode from "../../../Component/Modal/AuthorizationCode";
import ForgetEmail from "../../../Component/Modal/ForgetEmail";
import { BASE_URL } from "../../../config/app";
import { Typography } from "@mui/material";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const [verificationToken, setVerificationToken] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    // Function to extract email and verification token from URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("verificationToken");
    const userEmail = urlParams.get("email");

    if (token && userEmail) {
      setVerificationToken(token);
      setEmail(userEmail);

      verifyEmail(userEmail, token);
    }
  }, []);

  // Example function to verify email (you need to implement this)
  const verifyEmail = (email, token) => {
    // Make your API call here to verify the email
    // Example:
    fetch(`${BASE_URL}verify-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, verificationToken: token }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle response from API
        if (data.success) {
          toast.success("Email verified successfully!")
          navigate("/")
        }
      })
      .catch(error => {
        // Handle error
        console.error('Error verifying email:', error);
        toast.error("Error verifying email");
      });
  };
  function formatEmail(email) {
    const [localPart, domain] = email.split('@');
    if (localPart.length <= 1) {
      return email;
    }
    return `${localPart.slice(0, 2)}...@${domain}`;
  }

  const formattedEmail = formatEmail(email);

  return (
    <AuthLayout>
      <div className="login-div">
        <div className="text-center mb-4">
          <img src={Images.mainLogo} height={30} alt="logo" />
          <h1 className="mt-3">Email Verification</h1>

          <h4>Please wait untill we verify your email.</h4>
          <Typography className="text_email" id="modal-modal-description" sx={{ mt: 2 }}>
            {formattedEmail}
          </Typography>
          <Button
            label={"Continue"}
            onClick={() => navigate("/")}
          />

          {/* Link to navigate to home or desired page */}
        </div>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmail;
