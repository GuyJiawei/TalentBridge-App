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

// post to user-job once a user applied  -- to be done

module.exports = router;