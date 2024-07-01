import React, { useState } from 'react';
import CustomModal from './CustomModal';
import { Images } from '../../utils/images';
import Typography from '@mui/material/Typography';

export default function SendEmailModal({open,handleOpen,handleClose}) {
   

    return (
        <CustomModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
            <img src={Images.email_img} width="130" height="130" alt="car" />
            <Typography className="heading_email" id="modal-modal-title" variant="h6" component="h2">
                A link has been sent to your email
            </Typography>
            <Typography className="text_email" id="modal-modal-description" sx={{ mt: 2 }}>
                didier....@gmail.com
            </Typography>
            <Typography className="link_email" id="modal-modal-description" sx={{ mt: 2 }}>
                Didn't receive a link?
            </Typography>
            <Typography className="resend_email" id="modal-modal-description" sx={{ mt: 2 }}>
                Resend link
            </Typography>
           
        </CustomModal>
    );
}
