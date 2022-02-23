const User = require('../users/users-model')
const Job = require("../jobs/jobs-model")

const checkJobExists = async (req, res, next) => {
    const [job] = await Job.find({_id: req.params.job_id })
    if (!job){
        res.status(404).json('Error when trying to update Job!')
    } else {
        req.job = job
        next()
    }
}

module.exports = {checkJobExists}