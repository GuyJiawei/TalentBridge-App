const express = require('express');
const router = express.Router();

const withAuth = require('../utils/auth');

const { User, Jobs, Category } = require('../models');

router.get('/upload', async (req, res) => {
  try {
    res.render('upload');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/upload', async (req, res) => {
  try {
    const userData = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      resume: req.body.resume
    });

module.exports =router;