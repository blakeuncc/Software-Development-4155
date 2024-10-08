const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes/routes')

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.use('/', routes);

module.exports = app;