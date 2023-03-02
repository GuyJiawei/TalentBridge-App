const router = require('express').Router();
const { Category, Jobs, User } = require('../../models');

// The `/api/jobs` endpoint

// get all jobs
router.get('/', async (req, res) => {
    // find all jobs
    // include its associated Category 
    try {
        const jobData = await Jobs.findAll(
            {
                include: [{ model: Category }],
            }


        );

        res.status(200).json(jobData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});

// get one job
router.get('/:id', async (req, res) => {
    // find a single job by its `id`
    // include its associated Category 
    try {
        const jobData = await Jobs.findByPk(req.params.id,
            {
                include: [{ model: Category }],
            }
        );

        res.status(200).json(jobData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// create new job
router.post('/', async (req, res) => {
    try {
        const jobData = await Jobs.create(req.body);
        res.status(200).json(jobData);
    } catch (err) {
        res.status(400).json(err);
    }
});



// update job
router.put('/:id', async (req, res) => {
    // update a job by its `id` value
    try {
        const jobData = await Jobs.update(req.body, {
            where: {
                id: req.params.id,
            }
        });
        if (jobData == 0) {
            res.status(404).json({ message: 'No job found with that id!' });
            return;
        }
        console.log(jobData);
        res.status(200).json(jobData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/:id', async (req, res) => {
    // delete one job by its `id` value
    try {
        const jobData = await Jobs.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!jobData) {
            res.status(404).json({ message: 'No job found with that id!' });
            return;
        }

        res.status(200).json(jobData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all jobs in a specific categories --- to be asked




module.exports = router;