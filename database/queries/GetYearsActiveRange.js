const Artist = require('../models/artist');

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () => {
    return Promise.all([
        Artist.find({}).sort({ yearsActive: 1}).limit(1).then((artist) => artist[0].yearsActive),
        Artist.find({}).sort({ yearsActive: -1}).limit(1).then((artist) => artist[0].yearsActive)
    ]).then((result) => {
        return {min: result[0], max: result[1]}
    });
};
