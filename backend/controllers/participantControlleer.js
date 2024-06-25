const Participant = require('../models/ParticipantModel')
const mongoose = require('mongoose')

// // get all workouts
// const getWorkouts = async (req, res) => {
//   const workouts = await Workout.find({}).sort({createdAt: -1})

//   res.status(200).json(Participant)
// }

// // get a single workout
// const getWorkout = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'No such workout'})
//   }

//   const workout = await Participant.findById(id)

//   if (!workout) {
//     return res.status(404).json({error: 'No such workout'})
//   }

//   res.status(200).json(workout)
// }

// create a new workout
const createPart = async (req, res) => {
  const {lastname, firstname, email , phone , adresse , text} = req.body

  let emptyFields = []

  if (!lastname) {
    emptyFields.push('lastname')
  }
  if (!firstname) {
    emptyFields.push('firstname')
  }
  if (!email) {
    emptyFields.push('email')
  }
  if (!phone) {
    emptyFields.push('phone')
  }
  if (!email) {
    emptyFields.push('email')
  }
  if (!adresse) {
    emptyFields.push('adresse')
  }
  emptyFields.push('text')
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const part = await Participant.create({lastname, firstname, email , phone , adresse ,text})
    res.status(200).json(part)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// // delete a workout
// const deleteWorkout = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   const workout = await Workout.findOneAndDelete({_id: id})

//   if(!workout) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   res.status(200).json(workout)
// }

// // update a workout
// const updateWorkout = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   const workout = await Workout.findOneAndUpdate({_id: id}, {
//     ...req.body
//   })

//   if (!workout) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   res.status(200).json(workout)
// }

// module.exports = {
//   getWorkouts,
//   getWorkout,
//   createWorkout,
//   deleteWorkout,
//   updateWorkout
// }
module.exports = {
  createPart
}