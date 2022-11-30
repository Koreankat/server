const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workout")
const bodyParser = require("body-parser")
require("dotenv").config()

// express app
const app = express()

//middleware
app.use(bodyParser.json())
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//route
app.use("/api/workouts", workoutRoutes)

//db connection
mongoose
  .connect(
    "mongodb+srv://Test:123556645623qss@cluster0.cllantg.mongodb.net/workout-app?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000, () => {
      console.log("connected to db and listening on port", process.env.PORT)
    })
  })
  .catch((err) => console.log(err))

process.env
