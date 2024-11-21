import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button, TextField, Typography, Box, Container, Alert, CircularProgress } from '@mui/material';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.get('/api/user/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
      setNewEmail(response.data.email);
    } catch (error) {
      console.error('Error fetching user:', error.message);
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
    setNewPassword('');
    setOldPassword('');
  };

  const handleSubmitChanges = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      const updateData = {
        email: newEmail,
        newPassword: newPassword,
        oldPassword: oldPassword
      };

      const response = await axios.put('/api/user/profile', updateData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setUser(response.data);
      setMessage({ text: 'Profile updated successfully!', type: 'success' });
      setEditMode(false);
    } catch (error) {
      setMessage({ text: error.response?.data?.message || 'An error occurred', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    navigate('/login');
    return null;
  }

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

          <Box my={2}>
            <Typography variant="h6">User Information</Typography>
            <Typography><strong>Email:</strong> {user.email}</Typography>
          </Box>

          {!editMode ? (
            <Button variant="contained" color="primary" onClick={handleEditToggle}>
              Edit Profile
            </Button>
          ) : (
            <form onSubmit={handleSubmitChanges}>
              <TextField
                fullWidth
                margin="normal"
                label="New Email"
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
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
              <TextField
                fullWidth
                margin="normal"
                label="Current Password"
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
              <Box mt={2}>
                <Button type="submit" variant="contained" color="primary">
                  Save Changes
                </Button>
                <Button onClick={handleEditToggle} variant="outlined" sx={{ ml: 1 }}>
                  Cancel
                </Button>
              </Box>
            </form>
          )}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Profile;
