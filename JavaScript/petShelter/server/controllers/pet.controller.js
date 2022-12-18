const Pet = require('../models/pet.model.js');

module.exports.createPet = (req,res) => {
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => res.status(400).json(err))
}


module.exports.getAllPets = (req,res) => {
    Pet.find()
        .then(allPets => res.json(allPets))
        .catch(err => res.status(400).json({err}))
}

module.exports.getOnePet = (req,res) => {
    Pet.findOne({_id: req.params.id})
        .then(onePet => res.json(onePet))
        .catch(err => res.status(400).json({err}))
}

module.exports.updatePet= (req,res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json({err}))
};

module.exports.deletePet= (req,res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(deletedPet => res.json(deletedPet))
        .catch(err => res.status(400).json({err}))
}


