require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ParticipantModel = require('./models/ParticipantModel');


// Express app
const app = express();

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());





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

app.post('/register', (req, res) => {
  ParticipantModel.create(req.body)
    .then(part => res.json(part))
    .catch(err => res.json(err));
})
