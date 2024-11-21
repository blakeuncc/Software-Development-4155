const { app, connectDB } = require('./app'); // Import app and connectDB from app.js

const PORT = 5000;
const mongoURI = 'mongodb+srv://user-2:eK1ba6dlVpXDI9XU@mydb.nji1g.mongodb.net/CLTAlertDB?retryWrites=true&w=majority&appName=MyDB';

// Connect to the database and start the server
connectDB(mongoURI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error('Failed to connect to the database', err);
});
