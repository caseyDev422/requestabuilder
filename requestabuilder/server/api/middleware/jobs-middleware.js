const User = require("../users/users-model");
const Job = require("../jobs/jobs-model");
const mongoose = require('mongoose')

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
  console.log("job in BE", req.body);
  if (req.body.saved) {
    job.saved = req.body.saved;
    user.savedJobs.push(job);
  } else {
    for (let i = 0; i < user.savedJobs.length; i++) {
      const id = mongoose.Types.ObjectId(req.params.job_id);
      if (user.savedJobs[i]._id.equals(id)) {
        user.savedJobs.splice(0, i + 1);
        break;
      }
    }
  }
  console.log("savedJobs", user.savedJobs);
  await user.updateOne({ savedJobs: user.savedJobs });
};

module.exports = { checkJobExists, updateJobAndUserStatus };
