import * as React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import "./modalStyle.scss";

export default function CustomModal({ open, handleOpen, handleClose, children }) {
    return (
        <div>
            <Modal
                aria-labelledby="custom-modal-title"
                aria-describedby="custom-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
            >
                <Box className="modalStyle">
                    {children}
                    <div className="cross" onClick={handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                    <circle cx="44.956" cy="44.9365" r="44.3037" fill="url(#paint0_linear_0_5649)" />
                    <path d="M56.3138 33.5781L33.5957 56.2965" stroke="white" stroke-width="5" stroke-linecap="round" />
                    <path d="M33.5957 33.5778L56.3141 56.2959" stroke="white" stroke-width="5" stroke-linecap="round" />
                    <defs>
                        <linearGradient id="paint0_linear_0_5649" x1="44.956" y1="0.632812" x2="44.956" y2="89.2402" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF8600" />
                            <stop offset="1" stop-color="#FFD100" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
                </Box>
            </Modal>
        </div>
    );
}

CustomModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleOpen: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};
