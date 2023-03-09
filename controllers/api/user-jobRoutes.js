const router = require('express').Router();
const { Category, Jobs, User,UserJobs } = require('../../models');

// The `/api/applied` endpoint

// get all user-job table
router.get('/', async (req, res) => {
    try {
        const applicant = await UserJobs.findAll();  
        res.status(200).json(applicant);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// post to user-job once a user applied  


router.post('/', async (req, res) => {
    try {
        const jobData = await UserJobs.create({
            jobs_id: req.body.jobs_id,
            user_id: req.session.user_id
        });
        res.status(200).json(jobData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;