
const express = require('express')
// const {
//   getWorkouts, 
//   getWorkout, 
//   createWorkout, 
//   deleteWorkout, 
//   updateWorkout
// } = require('../controllers/participantControlleer')
const { createPart } = require('../controllers/participantControlleer')
const router = express.Router()
router.post('/', createPart)
// // GET all workouts
// router.get('/', getWorkouts)

// // GET a single workout
// router.get('/:id', getWorkout)

// POST a new workout


// // DELETE a workout
// router.delete('/:id', deleteWorkout)

// // UPDATE a workout
// router.patch('/:id', updateWorkout)

module.exports = router