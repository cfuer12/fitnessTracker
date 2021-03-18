const router = require("express").Router();
const db = require("../models");

// creating a new workout
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body).then(dbworkout => {
    res.json(dbworkout);
  });
});

// workout exercises by id
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.updateOne(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  ).then((dbworkout) => {
    res.json(dbworkout);
  });
});

// previous workout
router.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then(dbworkout => {
    res.json(dbworkout);
  });
});

// last seven workouts
router.get("/api/workouts/range",(req,res) => {
    db.Workout.find({})
    .sort({_id: -1})
    .limit(7)
    .then(dbworkout => {
        res.json(dbworkout);
        console.log(dbworkout);
    });
});

module.exports = router;