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
  if (req.body.saved) {
    job.saved = req.body.saved;
    user.savedJobs.push(job);
  } else {
    const newJobsArr = user.savedJobs.filter(
      (savedJob) => savedJob._id != req.params.job_id
    );
    user.savedJobs = newJobsArr
    req.updatedJobs = newJobsArr
  }
  await user.updateOne({ savedJobs: user.savedJobs });
  next();
};

module.exports = { checkJobExists, updateJobAndUserStatus };
