import React, { useState, useEffect } from "react";
import "../AuthCommon.scss";
import InputField from "../../../Component/InputField";
import Button from "../../../Component/Button";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../layout/AuthLayout"; // Adjust the path as needed
import { Images } from "../../../utils/images";
import { Typography } from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios"; // Assuming you're using Axios for API calls
import { BASE_URL } from "../../../config/app";

const ForgetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({}); // State to store validation errors
  const navigate = useNavigate();
  const [verificationToken, setVerificationToken] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    // Function to extract email and verification token from URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("verificationToken");
    const userEmail = urlParams.get("email");

    if (token && userEmail) {
      setVerificationToken(token);
      setEmail(userEmail);

      
    }
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "newPassword") setNewPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
    setErrors({}); // Clear errors on input change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters long";
    }
    if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // Prevent form submission if validation fails
    }

    try {
        const data={
            
        }
      const response = await axios.post(`${BASE_URL}/change-password`, {
        verificationToken:verificationToken,
            email:email,
            password:newPassword
      
      });

      if (response.data.success) {
        toast.success("Password changed successfully!");
        navigate("/login"); // Redirect to login page after success
      } else {
        toast.error(response.data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error("An error occurred");
    }
  };

  return (
    <AuthLayout>
      <div className="login-div" style={{maxWidth:"unset",width:400}}>
        <div className="mb-4 text-center">
          <img src={Images.mainLogo} height={30} alt="logo" />
          <Typography className="heading_email mt-3" id="modal-modal-title" variant="h5" component="h2">
            Create a New Password
          </Typography>
        </div>

        <form onSubmit={handleSubmit}>
          <InputField
            label="New Password"
            placeholder="Enter your new password"
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
            error={errors.newPassword}
            helperText={errors.newPassword} // Display error message below input
          />
          <div style={{ marginBottom: 20 }}></div>
          <InputField
            label="Confirm New Password"
            placeholder="Confirm your new password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            helperText={errors.confirmPassword} // Display error message below input
          />
          <div className="mt-3">
            <Button label={"Continue"} type="submit" />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgetPassword;
