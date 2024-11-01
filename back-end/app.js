const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

mongoURI = 'mongodb+srv://cmendosalazn22:8UTFOIiJCBoYLTqC@mydb.nji1g.mongodb.net/CLTAlertDB?retryWrites=true&w=majority&appName=MyDB'
//connect to database
mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.log(err.message));

app.use(express.json());

app.get('/api/endpoint', (req, res) => {
    console.log("Endpoint was hit");
    res.status(200).json({ message: "Hello from the back-end!" });
})

app.get('/', (req, res) => {
    res.send("Welcome! The server is running, but there’s no content here.");
});

app.use('/users', userRoutes);

const crimeRoutes = require('./routes/crimeRoutes');
app.use('/api', crimeRoutes);


module.exports = app;