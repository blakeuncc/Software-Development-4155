const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

/*app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); */

app.get('/api/endpoint', (req, res) => {
    console.log("Endpoint was hit");
    res.status(200).json({ message: 'Hello from the back-end!' });
});

module.exports = app;