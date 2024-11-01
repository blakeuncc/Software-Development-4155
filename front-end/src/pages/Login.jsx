import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate(); // For redirecting after successful login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackType, setFeedbackType] = useState('');

    const handleLogin = async () => {
        try {
            // Send POST request to the back-end login endpoint
            const response = await Axios.post('/users/login', { email, password });

            // If login is successful
            setFeedbackMessage(response.data.message || 'Login successful!');
            setFeedbackType('success');

            // Store token in localStorage or a cookie if you need to remember the user
            localStorage.setItem('token', response.data.token);

            // Redirect to home or dashboard page after successful login
            setTimeout(() => {
                navigate('/home'); // Replace '/home' with your desired page
            }, 1500);
        } catch (error) {
            // Handle login errors
            const errorMessage = error.response?.data?.message || 'Incorrect email or password.';
            setFeedbackMessage(errorMessage);
            setFeedbackType('error');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <Container maxWidth="xs">
                    <Box mt={5} display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h4" gutterBottom>
                            Login
                        </Typography>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleLogin}
                            style={{ marginTop: '16px' }}
                        >
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            onClick={() => navigate('/register')} // Redirect to registration page
                            style={{ marginTop: '16px' }}
                        >
                            Register
                        </Button>
                        {feedbackMessage && (
                            <Typography
                                variant="body2"
                                style={{
                                    color: feedbackType === 'success' ? 'green' : 'red',
                                    marginTop: '16px',
                                    textAlign: 'center'
                                }}
                            >
                                {feedbackMessage}
                            </Typography>
                        )}
                    </Box>
                </Container>
            </div>
            <div className="welcome-section">
                <Typography variant="h3" color="black">
                    Welcome to CLTAlert
                </Typography>
                <Typography variant="body1" color="black" style={{ marginTop: '16px' }}>
                    Welcome to the Crime Reporting App! This application allows you to report crimes in your area quickly and easily.
                    Your reports help make the community safer and more aware of criminal activities.
                </Typography>
            </div>
        </div>
    );
};

export default Login;
