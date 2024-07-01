import React, { useState } from 'react';
import CustomModal from './CustomModal';
import { Images } from '../../utils/images';
import Typography from '@mui/material/Typography';
import { Modal } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '../Button';
export default function VerificationModal({ open, handleOpen, handleClose }) {


    return (
        <Modal
            aria-labelledby="custom-modal-title"
            aria-describedby="custom-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
        >
            <Box className="modalStyle p-0"  >
                <Box className="bg-modal-img">
                    <Typography className="email_account" id="modal-modal-title" variant="h6" component="h2">
                        <div className="text-center">

                            <img src={Images.Hexagon} width="200" height="200" alt="car" style={{ marginTop: "6rem" }} />
                        </div>
                        <div className="email_account mt-4" >
                            Confirm your email through the
                            link sent to your email account.
                        </div>
                    </Typography>
                    <Typography className="link_email" id="modal-modal-description" sx={{ mt: 2 }}>
                        Didn't receive a link?
                    </Typography>
                    {/* <Button label={"Resend link"} /> */}
                    <div className="simpleCross" onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                            <path d="M40.0681 2.77246L2.87793 39.9626" stroke="#FF9000" stroke-width="5" stroke-linecap="round" />
                            <path d="M2.87793 2.77272L40.0681 39.9629" stroke="#FF9000" stroke-width="5" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div style={{width:"300px"}} className='my-4'>
                        
                    <Button label={"Resend link"}  />
                    </div>

                </Box>

            </Box>

        </Modal>
    );
}
