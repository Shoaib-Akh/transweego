import React, { useState } from 'react';
import CustomModal from './CustomModal';
import { Images } from '../../utils/images';
import Typography from '@mui/material/Typography';
import InputField from '../InputField';
import Button from '../Button';

export default function AuthorizationCode({ open, handleOpen, handleClose }) {


    return (
        <CustomModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
            {/* <img src={Images.email_img} width="130" height="130" alt="car" /> */}
            <Typography className="heading_email" id="modal-modal-title" variant="h6" component="h2">
                An authorization code has been sent to your mobile phone number
            </Typography>
            <Typography className="text_email" id="modal-modal-description" sx={{ mt: 2 }}>
                didier....@gmail.com
            </Typography>
            <div style={{ width: "100%", marginTop: 30, }}>
                <InputField

                    //   onChange={(e) => setPassword(e.target.value)}
                    label="Please enter the authorization code below"
                    placeholder="Enter your code"
                    type="text"
                //   value={password}
                />
                <div >

                    <Button label={"Continue"} />
                </div>
            </div>
            <Typography className="link_email" id="modal-modal-description" sx={{ mt: 1 }} style={{ marginTop: 20 }}>
                Request another authorization code.
            </Typography>


        </CustomModal>
    );
}
