// const express = require('express');
// const app = express();
// const userRoutes = require('./routes/userRoutes');
// const PORT = process.env.PORT || 5000;
// const mongoose = require('mongoose');
// const crimeRoutes = require('./routes/crimeRoutes');
// const cors = require('cors');

// app.use(cors({
//     origin: 'http://localhost:3000', // frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true
// }));
// app.use(express.json());

// mongoURI = 'mongodb+srv://user-2:eK1ba6dlVpXDI9XU@mydb.nji1g.mongodb.net/CLTAlertDB?retryWrites=true&w=majority&appName=MyDB'
// //connect to database
// mongoose.connect(mongoURI)
//     .then(() => {
//         console.log("Connected to MongoDB");
//         app.listen(PORT, () => {
//             console.log(`Server is running on http://localhost:${PORT}`);
//         });
//     })
//     .catch(err => console.log(err.message));



// /*app.get('/api/endpoint', (req, res) => {
//     console.log("Endpoint was hit");
//     res.status(200).json({ message: "Hello from the back-end!" });
// }) */

// app.get('/', (req, res) => {
//     res.send("Welcome! The server is running, but there’s no content here.");
// });

// app.use('/users', userRoutes);
// app.use('/api', crimeRoutes);

// module.exports = app;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const crimeRoutes = require('./routes/crimeRoutes');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());

// MongoDB Connection
const connectDB = async (mongoURI) => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to the database!');
    } catch (err) {
        console.error(err.message);
    }
};


// keep this line as a placeholder for development and testing 
app.get('/', (req, res) => {
    res.send("Welcome! The server is running, but there's no content here.");
});


app.use('/users', userRoutes);
app.use('/api', crimeRoutes);

module.exports = { app, connectDB };
