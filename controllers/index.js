const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const adsRoutes= require('./adsRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/', adsRoutes);


// ask Nav-tutor
router.use((req, res) => {
    return res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;



// Send a response.

// Examples:

// res.send(new Buffer('wahoo'));
// res.send({ some: 'json' });
// res.send('<p>some html</p>');
// res.status(404).send('Sorry, cant find that');