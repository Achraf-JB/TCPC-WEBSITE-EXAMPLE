const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ParticipantSchema = new Schema({
  lastname: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  adresse: {
    type: String,
    required: true
  },
  text: {
    type: String
  }
}, { timestamps: true })
//exporting  the participant model ..
module.exports = mongoose.model('Participant', ParticipantSchema)