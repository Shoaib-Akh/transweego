import React from 'react';
import CustomModal from './CustomModal';
import Typography from '@mui/material/Typography';
import InputField from '../InputField';
import Button from '../Button';

export default function AuthorizationCode({ open, handleOpen, handleClose, email }) {
    function formatEmail(email) {
        const [localPart, domain] = email.split('@');
        if (localPart.length <= 1) {
            return email;
        }
        return `${localPart.slice(0, 2)}...@${domain}`;
    }

    const formattedEmail = formatEmail(email);

    return (
        <CustomModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
            <Typography className="heading_email" id="modal-modal-title" variant="h6" component="h2">
                An authorization code has been sent to your mobile phone number
            </Typography>
            <Typography className="text_email" id="modal-modal-description" sx={{ mt: 2 }}>
                {formattedEmail}
            </Typography>
            <div style={{ width: "100%", marginTop: 30 }}>
                <InputField
                    label="Please enter the authorization code below"
                    placeholder="Enter your code"
                    type="text"
                />
                <div style={{ marginTop: 20 }}>
                    <Button label={"Continue"} />
                </div>
            </div>
            <Typography className="link_email" id="modal-modal-description" sx={{ mt: 1 }} style={{ marginTop: 20 }}>
                Request another authorization code.
            </Typography>
        </CustomModal>
    );
}
