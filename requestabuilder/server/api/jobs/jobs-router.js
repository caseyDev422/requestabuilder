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
    res.status(200).json(user.associatedJobs)
})

router.get('/:user_name/my-jobs/saved', (req, res) => {
    // send back jobs with the saved status
    // these jobs are the ones that a user takes on
})

router.post('select-job', (req, res) => {
    // accept request to set job to selected and send back verification
})
router.post('/:user_name/create-job', async (req, res, next) => {
    const [user] = await User.find({ userName: req.params.user_name })
    console.log(user)
    const newJob = new Job(req.body)
    user.associatedJobs.push(newJob)
    newJob.createdBy = req.params.user_name
    
    try {
        newJob.save()
    } catch (error) {
        next(error)
    }
    
    try {
        console.log(user.associatedJobs)
        await user.updateOne({ associatedJobs: user.associatedJobs })
    } catch (error) {
        next(error)
    }
    
})
router.post("/:user_name/:job_id/select-job", async (req, res, next) => {
    console.log("HITTING PUT")
    await Job.findByIdAndUpdate(req.params.job_id, {claimedJob: req.body.claimedJob})   
    res.send({ message: "JOb clamied"})
    

})

module.exports = router