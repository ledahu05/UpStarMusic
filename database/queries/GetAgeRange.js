const Artist = require('../models/artist');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
    return Promise.all([
        Artist.find({}).sort({ age: 1}).limit(1).then((artist) => artist[0].age),
        Artist.find({}).sort({ age: -1}).limit(1).then((artist) => artist[0].age)
    ]).then((result) => {
        return {min: result[0], max: result[1]}
    });
    


};
