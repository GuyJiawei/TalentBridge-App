const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const jobRoutes = require('./jobRoutes');
const userRoutes = require('./userRoutes');

router.use('/categories', categoryRoutes);
router.use('/jobs', jobRoutes);
router.use('/users', userRoutes);

module.exports = router;