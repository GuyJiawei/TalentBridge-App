const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// router.get('/signup', async (req, res) => {
//   try {
//     res.render('signup');
//   } catch (err) {
//     res.statusMessage(500).json(err);
//   }
// });

module.exports = router;