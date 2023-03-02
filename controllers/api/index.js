const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const jobRoutes = require('./jobRoutes');
const userRoutes = require('./userRoutes');
const userJobRoutes = require('./user-jobRoutes');

router.use('/categories', categoryRoutes);
router.use('/jobs', jobRoutes);
router.use('/users', userRoutes);
router.use('/applied', userJobRoutes);

module.exports = router;