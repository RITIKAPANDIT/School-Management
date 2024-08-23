
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const schoolRoutes = require('./controllers/student.controller');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/schools', schoolRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


