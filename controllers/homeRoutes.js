const withAuth = require('../utils/auth');

const { User } = require('../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.statusMessage(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/profile', withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      skill: req.body.dropdown
    },
      {
        where: {
          id: req.session.user_id,
        }
      });
    console.log(userData);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});



// router.get('/profile/:id', async (req, res) => {

//   try {
//     res.render('profile');
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;