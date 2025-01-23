import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import './footer.css';

const Footer = () => {
  return (
    <Box className="footer" sx={{ bgcolor: 'primary.dark', color: 'white', py: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Staff Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Meet Our Staff
          </Typography>
          <Typography component="p">Head Chef: John Doe</Typography>
          <Typography component="p">Sous Chef: Jane Smith</Typography>
          <Typography component="p">Restaurant Manager: Sarah Johnson</Typography>
          <Typography component="p">Host: Michael Brown</Typography>
        </Grid>

        {/* About Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography component="p" sx={{ mb: 2 }}>
            Welcome to Resto Paradise! We strive to provide exceptional food and an unforgettable dining experience.
          </Typography>
          <Typography component="p">
            <Link
              href="https://github.com/codx-paradise"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="inherit"
            >
              Developed by hinada achim
            </Link>
          </Typography>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography component="p" variant="body2">
          Copyright ©2024 All rights reserved | Resto Paradise
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
