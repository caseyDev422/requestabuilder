const express = require("express")
const router = express.Router()
const User = require("../users/users-model")
const Job = require("./jobs-model")
const mongoose = require('mongoose')
const {checkJobExists} = require("../middleware/jobs-middleware")


//will need to add queryParams for filtered jobs
router.get('/all-jobs', async(req, res) => {
    // to send back all jobss
    const jobs = await Job.find()
    res.status(200).json(jobs)

})

router.get('/profile', (req, res) => {
    // to render profile data to screen
})

router.get('/:user_name/my-jobs/completed', (req, res) => {
    // send back jobs with the completion status
})

router.get('/:user_name/my-jobs/created', async (req, res) => {
    // send back jobs with the user created
    const [user] = await User.find({ userName: req.params.user_name })
    res.status(200).json(user.createdJobs)
})

router.get('/:user_name/my-jobs/saved', async (req, res) => {
    // send back jobs with the saved status
    // these jobs are the ones that a user takes on

    const [user] = await User.find({ userName: req.params.user_name })
    res.status(200).json(user.savedJobs)
})

router.put(`/:user_name/:job_id/update-saved`, checkJobExists, async (req, res) => {
    const { job } = req
    const user = await User.findOne({ userName: req.params.user_name })
        await Job.updateOne({_id: req.params.job_id }, {$set: req.body })
        console.log('job in BE', req.body);
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
        console.log('savedJobs', user.savedJobs);
        await user.updateOne({savedJobs: user.savedJobs})
        res.status(201).json({message: 'Job was Claimed! successfully!'})
    
})
router.post('/:user_name/create-job', async (req, res, next) => {
    const [user] = await User.find({ userName: req.params.user_name })
    console.log(user)
    const newJob = new Job(req.body)
    user.createdJobs.push(newJob)
    newJob.createdBy = req.params.user_name
    
    try {
        newJob.save()
    } catch (error) {
        next(error)
    }
    
    try {
        console.log(user.createdJobs)
        await user.updateOne({ createdJobs: user.createdJobs })
    } catch (error) {
        next(error)
    }
    
})

module.exports = router