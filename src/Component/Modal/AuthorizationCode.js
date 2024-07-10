import React, { useState } from 'react';
import CustomModal from './CustomModal';
import Typography from '@mui/material/Typography';
import InputField from '../InputField';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config/app';
import { toast } from 'react-toastify';

export default function AuthorizationCode({ open, handleOpen, handleClose, email }) {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();

    function formatEmail(email) {
        const [localPart, domain] = email?.split('@');
        if (localPart.length <= 1) {
            return email;
        }
        return `${localPart?.slice(0, 2)}...@${domain}`;
    }

    const formattedEmail = formatEmail(email);

    const handleOtpConfirmation = async () => {
        fetch(`${BASE_URL}verify-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, otp }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    toast.success("Signed in successfully")
                    handleClose()
                    navigate("/")
                } else {
                    toast.error(data.message)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <CustomModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
            <Typography className="heading_email" id="modal-modal-title" variant="h6" component="h2">
                An authorization code has been sent to your email
            </Typography>
            <Typography className="text_email" id="modal-modal-description" sx={{ mt: 2 }}>
                {formattedEmail}
            </Typography>
            <div style={{ width: "100%", marginTop: 30 }}>
                <InputField
                    label="Please enter the authorization code below"
                    placeholder="Enter your code"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />
                <div style={{ marginTop: 20 }}>
                    <Button label={"Continue"} onClick={handleOtpConfirmation} />
                </div>
            </div>
            <Typography className="link_email" id="modal-modal-description" sx={{ mt: 1 }} style={{ marginTop: 20 }}>
                Request another authorization code.
            </Typography>
        </CustomModal>
    );
}
