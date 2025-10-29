const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();
// router.param('id', tourController.checkID);

// Create a checkBody middleware

router.route('/').get(tourController.getTours).post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
