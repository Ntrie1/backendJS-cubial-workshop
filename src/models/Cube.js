const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: String,
    description: String, 
    imageUrl: String,
    difficultyLevel: Number,

});

const Cube = new mongoose.model('Cube', cubeSchema);

module.exports = Cube;
