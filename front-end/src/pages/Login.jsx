import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackType, setFeedbackType] = useState('');

        const handleLogin = () => {
            // Handle login logic here (e.g., API call)
            if (email === 'user@example.com' && password === 'password') {
                setFeedbackMessage('Login successful!');
                setFeedbackType('success');
            } else if (email === 'locked@example.com') {
                // Simulate account lockout scenario
                setFeedbackMessage('Your account is locked. Please contact support.');
                setFeedbackType('error');
            } else {
                // Simulate incorrect credentials
                setFeedbackMessage('Incorrect email or password.');
                setFeedbackType('error');
            }
        };
        const handleRegisterClick = () => {
            console.log("Register button clicked");
            navigate ('/Register');
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
                                style={{marginTop: '16px'}}
                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                fullWidth
                                onClick={handleRegisterClick}
                                style={{marginTop: '16px'}}
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
                    <Typography variant="body1" color="black" style={{marginTop: '16px'}}>
                        Welcome to the Crime Reporting App! This application allows you to report crimes in your area
                        quickly and easily.
                        Your reports help make the community safer and more aware of criminal activities.
                    </Typography>
                </div>
            </div>
        );
    };

export default Login;