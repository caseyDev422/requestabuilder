const express = require("express");
const router = express.Router();
const User = require("../users/users-model");
const Job = require("./jobs-model");
const {
  checkJobExists,
  updateJobAndUserStatus,
} = require("../middleware/jobs-middleware");

//will need to add queryParams for filtered jobs
router.get("/all-jobs", async (req, res) => {
  // to send back all jobss
  const jobs = await Job.find();
  res.status(200).json(jobs);
});

router.get("/profile", (req, res) => {
  // to render profile data to screen
});

router.get("/:user_name/my-jobs/completed", (req, res) => {
  // send back jobs with the completion status
});

router.get("/:user_name/my-jobs/created", async (req, res) => {
  // send back jobs with the user created
  const [user] = await User.find({ userName: req.params.user_name });
  res.status(200).json(user.createdJobs);
});

router.get("/:user_name/my-jobs/saved", async (req, res) => {
  // send back jobs with the saved status
  // these jobs are the ones that a user takes on

  const [user] = await User.find({ userName: req.params.user_name });
  res.status(200).json(user.savedJobs);
});

router.put(
  `/:user_name/:job_id/update-saved`,
  checkJobExists,
  updateJobAndUserStatus,
  (req, res) => {
    res.status(201).json({ message: "Job was Updated successfully!" });
  }
);
router.post("/:user_name/create-job", async (req, res, next) => {
  const [user] = await User.find({ userName: req.params.user_name });
  console.log(user);
  const newJob = new Job(req.body);
  user.createdJobs.push(newJob);
  newJob.createdBy = req.params.user_name;

  try {
    newJob.save();
  } catch (error) {
    next(error);
  }

  try {
    console.log(user.createdJobs);
    await user.updateOne({ createdJobs: user.createdJobs });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
