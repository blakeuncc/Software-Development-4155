import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Container, Alert, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const [email, setEmail] = useState('user@example.com'); // change in fourth sprint
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const [profilePicture, setProfilePicture] = useState('/placeholder.svg?height=100&width=100');

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfilePicture(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({ text: 'Profile updated successfully!', type: 'success' });
  };

  return (
      <Box>
        <Header />
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Profile Page
            </Typography>

            {message.text && (
                <Alert severity={message.type} onClose={() => setMessage({ text: '', type: '' })} sx={{ mb: 2 }}>
                  {message.text}
                </Alert>
            )}

            <Box my={2} display="flex" flexDirection="column" alignItems="center">
              <Avatar
                  src={profilePicture}
                  alt="Profile Picture"
                  sx={{ width: 100, height: 100, mb: 2 }}
              />
              <input
                  accept="image/*"
                  id="profile-picture-input"
                  type="file"
                  hidden
                  onChange={handleProfilePictureChange}
              />
              <label htmlFor="profile-picture-input">
                <Button variant="contained" component="span">
                  Change Profile Picture
                </Button>
              </label>
            </Box>

            <form onSubmit={handleSubmit}>
              <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
              <TextField
                  fullWidth
                  margin="normal"
                  label="New Password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
              />
              <Box mt={2} display="flex" justifyContent="center">
                <Button type="submit" variant="contained" color="primary"  >
                  Save Changes
                </Button>
              </Box>
            </form>

            <Box mt={4} display="flex" flexDirection="column" alignItems="center">
              <Button
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => setMessage({ text: 'Account deletion is not implemented.', type: 'info' })}
              >
                Delete Account
              </Button>
            </Box>
          </Box>
        </Container>
        <Footer />
      </Box>
  );
};

export default Profile;