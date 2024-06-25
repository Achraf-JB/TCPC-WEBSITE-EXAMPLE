require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const participantRoutes = require('./routes/participant');

// Express app
const app = express();

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If you need to send cookies or authentication headers
  optionsSuccessStatus: 204
}));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/participants', participantRoutes); // Corrected route

// Connect to database
mongoose.connect(process.env.MONG_URI)
  .then(() => {
    console.log('connected to database');
    // Listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
