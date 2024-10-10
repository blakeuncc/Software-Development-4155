const express = require('express');
const app = express();
const routes = require('./routes/routes');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.get('/api/endpoint', (req, res) => {
    console.log("Endpoint was hit");
    res.status(200).json({ message: "Hello from the back-end!" });
})

app.use('/', routes);

module.exports = app;