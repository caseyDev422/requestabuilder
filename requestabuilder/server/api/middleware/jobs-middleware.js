const User = require("../users/users-model");
const Job = require("../jobs/jobs-model");
const mongoose = require("mongoose");

const checkJobExists = async (req, res, next) => {
  const [job] = await Job.find({ _id: req.params.job_id });
  if (!job) {
    res.status(404).json("Error when trying to update Job!");
  } else {
    req.job = job;
    next();
  }
};

const updateJobAndUserStatus = async (req, res, next) => {
  const { job } = req;
  const user = await User.findOne({ userName: req.params.user_name });
  await Job.updateOne({ _id: req.params.job_id }, { $set: req.body });

  // TODO refactor code
  if (req.body.saved && req.body.completed) {
    job.saved = req.body.saved;
    job.completed = req.body.completed;
    user.completedJobs.push(job);
    const newJobsArr = user.savedJobs.filter(
      (savedJob) => savedJob._id != req.params.job_id
    );
    user.savedJobs = newJobsArr
    req.updatedJobs = newJobsArr
  } else if (req.body.saved) {
    //claim a job
    job.saved = req.body.saved;
    user.savedJobs.push(job);
  } else {
    // removing job from save
    const newJobsArr = user.savedJobs.filter(
      (savedJob) => savedJob._id != req.params.job_id
    );
    user.savedJobs = newJobsArr
    req.updatedJobs = newJobsArr
  }
  await user.updateOne({ savedJobs: user.savedJobs });
  await user.updateOne({ completedJobs: user.completedJobs });
  
  next();
};

module.exports = { checkJobExists, updateJobAndUserStatus };
