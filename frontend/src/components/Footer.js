// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="80px"
            bgcolor="#1a1c1b"
            color="white"
            mt={2}
            left='0'
            bottom='0'
            width='100%'
            zIndex='10' // Ensures the footer stays on top if there are other components with lower z-index
        >
            <Typography variant="body1">
                Nandan Ladani © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
