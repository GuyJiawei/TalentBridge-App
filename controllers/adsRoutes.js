const withAuth = require('../utils/auth');
const { Jobs } = require('../models');
const { Category } = require('../models');
const { User } = require('../models');
const router = require('express').Router();

router.get('/jobs',  withAuth, async (req, res) => {
    // find all jobs
   // include its associated Category 
   try {
     const jobData = await Jobs.findAll(
         {
             include: [{ model: Category }],
         }


     );
     const jobAds = jobData.map((job) => job.get({ plain: true }));
    
     res.render('ads',{jobAds, logged_in: req.session.logged_in });
     // res.status(200).json(jobData);
 } 
 catch (err) {
   console.error(err);
   res.status(500).json(err);
 }
});



router.get(`/jobs/:id`, async (req, res) => {
  // find a single job by its `id`
  // include its associated Category 
  try {
      const jobData = await Jobs.findByPk(req.params.id);

      const jobAds = jobData.get({ plain: true });
      res.render('job', {
          ...jobAds,
          logged_in: true
        });

      // res.status(200).json(jobData);
  } catch (err) {
      res.status(500).json(err);
      console.log(err);
  }
});

module.exports = router;