const Restaurants = require('../restaurants.json');

exports.getRestaurantsByCity = (req, res) => {
    const {city} = req.params;
    const filteredRestaurants = Restaurants.filter(item => item.city == city);

    res.status(200).json({message:"Restaurants Fetched Successfully", restaurants: filteredRestaurants})
}