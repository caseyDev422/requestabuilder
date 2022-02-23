const express = require("express")
const router = express.Router()
const User = require("../users/users-model")
const Job = require("./jobs-model")


//will need to add queryParams for filtered jobs
router.get('/all-jobs', async(req, res) => {
    // to send back all jobs
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

router.put(`/:user_name/:job_id/update-saved`, async (req, res) => {
    // accept request to set job to selected and send back verification
    console.log(req.params.job_id)
    const [job] = await Job.find({ _id: req.params.job_id })
    const user = await User.findOne({ userName: req.params.user_name })
    console.log(job)
    console.log(user);
    if(!job) {
        res.status(404).send("Error when Trying to claim job!")
    } else {
        await Job.updateOne({_id: req.params.job_id }, {$set: req.body })
        if (job.saved) {
          user.savedJobs.push(job)  
        } else {
            user.savedJobs.filter(job => {
                return !job.saved
            })
        }
        console.log('savedJobs', user.savedJobs);
        await user.updateOne({savedJobs: user.savedJobs})
       // await User.updateOne({user_name: req.params.user_name}, {$set: req.body.savedJobs})
        res.status(201).json({message: 'Job was Claimed! successfully!'})
    }
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