import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#3a3a85', color: 'white', position: 'fixed', bottom: 0, width: '100%', padding: '5px 15px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
          &copy; CLTAlert
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;

