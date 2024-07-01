import React, { useState } from 'react';
import CustomModal from './CustomModal';
import { Images } from '../../utils/images';
import Typography from '@mui/material/Typography';
import InputField from '../InputField';
import Button from '../Button';

export default function CreatePassword({ open, handleOpen, handleClose }) {


    return (
        <CustomModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
            {/* <img src={Images.email_img} width="130" height="130" alt="car" /> */}
            <Typography className="heading_email" id="modal-modal-title" variant="h6" component="h2">
            A new create a password
            </Typography>

            <div className='w-100 mt-4'>
                <InputField

                    //   onChange={(e) => setPassword(e.target.value)}
                    label="E-mail address"
                    placeholder="Enter your e-mail address"
                    type="password"
                //   value={password}
                />
                <div className='my-2'></div>
                <InputField

                    //   onChange={(e) => setPassword(e.target.value)}
                    label="Retype E-mail address"
                    placeholder="Enter your e-mail address again"
                     type="password"
                //   value={password}
                />
                <div className='mt-3' >

                    <Button label={"Continue"} />
                </div>
            </div>



        </CustomModal>
    );
}
