const express = require("express")
const router = express.Router()



//will need to add queryParams for filtered jobs
router.get('/all-jobs', (req, res) => {
    // to send back all jobs
    res.send("testing jobs router")
})

router.get('/profile', (req, res) => {
    // to render profile data to screen
})

router.get(':user_name/my-jobs/completed', (req, res) => {
    // send back jobs with the completion status
})

router.post(':user_name/my-jobs/created', (req, res) => {
    // send back jobs with the user created
})

router.get(':user_name/my-jobs/saved', (req, res) => {
    // send back jobs with the saved status
    // these jobs are the ones that a user takes on
})

router.post('select-job', (req, res) => {
    // accept request to set job to selected and send back verification
})

module.exports = router