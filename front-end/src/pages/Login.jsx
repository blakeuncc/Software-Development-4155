import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import './Login.css';
// change css to the pic
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here (e.g., API call)
        console.log('Logging in with', email, password);
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
                    </Box>
                </Container>
            </div>
            <div className="welcome-section">
                <Typography variant="h3" color="white">
                    Welcome to CLTAlert
                </Typography>
                <Typography variant="body1" color="white" style={{ marginTop: '16px' }}>
                    Welcome to the Crime Reporting App! This application allows you to report crimes in your area quickly and easily.
                    Your reports help make the community safer and more aware of criminal activities.
                </Typography>
            </div>
        </div>
    );
};

export default Login;