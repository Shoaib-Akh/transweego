import React, { useState } from 'react';
import CustomModal from './CustomModal';
import { Images } from '../../utils/images';
import Typography from '@mui/material/Typography';
import InputField from '../InputField';
import Button from '../Button';
import { BASE_URL } from '../../config/app';
import AuthorizationCode from './AuthorizationCode';
import { toast } from 'react-toastify';

export default function ForgetEmail({ open, handleOpen, handleClose }) {
    const [email, setEmail] = useState('');
    const [retypeEmail, setRetypeEmail] = useState('');
    const [error, setError] = useState('');
    const [verificationOpen, setVerificationOpen] = useState(false);


    const handleVerificationOpen = () => setVerificationOpen(true);
    const handleVerificationClose = () => setVerificationOpen(false);
    const handleSubmit = () => {
        if (email !== retypeEmail) {
            setError('Emails do not match');
        } else {
            setError('');
            // Make the API call
            emailVerify(email);
        }
    };

    const emailVerify = (email) => {
        // Replace with your API call logic
        console.log('Verifying email:', email);
        if (email) {
            // Example API call
            fetch(`${BASE_URL}forget-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })
                .then(response => response.json())
                .then(data => {
                    // handleVerificationOpen()
                    toast.success("Update password email sent successfully")
                    setEmail("")
                    setRetypeEmail("")
                    handleClose()
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    return (
        <CustomModal open={open} handleOpen={handleOpen} handleClose={handleClose}>

            <Typography className="heading_email" id="modal-modal-title" variant="h6" component="h2">
                Enter email
            </Typography>

            <div className='w-100 mt-4'>
                <InputField
                    onChange={(e) => setEmail(e.target.value)}
                    label="E-mail address"
                    placeholder="Enter your e-mail address"
                    type="text"
                    value={email}
                />
                <div className='my-2'></div>
                <InputField
                    onChange={(e) => setRetypeEmail(e.target.value)}
                    label="Retype E-mail address"
                    placeholder="Enter your e-mail address again"
                    type="text"
                    value={retypeEmail}
                />
                {error && <Typography color="error">{error}</Typography>}
                <div className='mt-3'>
                    <Button label={"Continue"} onClick={handleSubmit} />
                </div>
            </div>
            <AuthorizationCode
                email={email}
                open={verificationOpen}
                handleOpen={handleVerificationOpen}
                handleClose={handleVerificationClose}
            />
        </CustomModal>
    );
}
