const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

// router.use((req, res) => {
//     return res.send("<h1>Wrong Route!</h1>")
// });

module.exports = router;