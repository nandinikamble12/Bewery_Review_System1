const express = require('express');
const Review = require('../db/models/Review');

const router = express.Router();

// POST new review
router.post('/', async (req, res) => {
  try {
    const { breweryId, review, rating } = req.body;
    const newReview = new Review({ breweryId, review, rating });
    await newReview.save();
    res.status(201).json({ message: 'Review added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add review' });
  }
});

// GET reviews by breweryId
router.get('/:breweryId', async (req, res) => {
  try {
    const breweryId = req.params.breweryId;
    const reviews = await Review.find({ breweryId });
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch reviews' });
  }
});

module.exports = router;
