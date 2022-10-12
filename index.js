const express = require('express');

const locationController = require('../Controller/location');
const mealtypeController = require('../Controller/mealtypes');
const restaurantController = require('../Controller/restaurant');


const route = express.Router();

route.get('/locations', locationController.getLocations);
route.get('/mealtypes', mealtypeController.getMealtypes);
route.get('/restaurants/:locId', restaurantController.getRestaurantByLocId);
route.post('/filter', restaurantController.filterRestaurants);

module.exports = route;