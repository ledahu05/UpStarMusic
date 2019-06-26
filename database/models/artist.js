// Todo: Create Artist Model
const mongoose = require('mongoose');
const AlbumSchema = require('./album')
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: { type: String, text: true },
    age: Number,
    yearsActive: Number,
    image: String,
    genre: String,
    website: String,
    netWorth: Number,
    labelName: String,
    retired: Boolean,
    albums:[AlbumSchema]
});



const Artist = mongoose.model('artist', ArtistSchema); //represents the entire collection of data

module.exports = Artist;