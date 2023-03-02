const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const jobRoutes = require('./jobRoutes');
const userRoutes = require('./userRoutes');
const userJobRoutes = require('./user-jobRoutes');
const homeRoutes = require('../homeRoutes');

router.use('/categories', categoryRoutes);
router.use('/jobs', jobRoutes);
router.use('/users', userRoutes);
router.use('/applied', userJobRoutes);
router.use('/', homeRoutes);

module.exports = router;