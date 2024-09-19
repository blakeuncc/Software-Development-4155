const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/endpoint', (req, res) => {
    res.json({ message: 'Hello from the back-end!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});