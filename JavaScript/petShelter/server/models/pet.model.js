const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: {type: String, required: [ true, "Pet Name is required"], minLength: [3, "Pet Name must be 3 characters or longer"]},
    type: {type: String, required: [true, "Pet Type is required"], minLength: [3, "Pet Type must be 3 characters or longer"]},
    description: {type: String, required: [true, "Description is required"], minLength: [3, "Description must be 3 characters or longer"]},
    skills1:{type: String, required:[false, "A pet may have between 0 and 3 skills"]},
    skills2:{type: String, required:[false,"A pet may have between 0 and 3 skills"]},
    skills3:{type: String, required:[false, "A pet may have between 0 and 3 skills"]}

}, {timestamps: true});
module.exports = mongoose.model('Pet', PetSchema);