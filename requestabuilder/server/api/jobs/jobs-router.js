const express = require("express")
const router = express.Router()
const User = require("../users/users-model")
const Job = require("./jobs-model")


//will need to add queryParams for filtered jobs
router.get('/all-jobs', (req, res) => {
    // to send back all jobs
    res.send("testing jobs router")

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

module.exports = router