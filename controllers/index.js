const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const adsRoutes= require('./adsRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/', adsRoutes);

router.use((req, res) => {
    return res.send("Wrong Route!")
});

module.exports = router;