const { deleteOne } = require("../models/jokes.model");
const Joke = require("../models/jokes.model");

const getAllJokes = (req,res) => {
    Joke.find()
        .then((allJokes) => res.json(allJokes))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }))
};

const getJokeById = (req,res) => {
    const {params} = req;
    Joke.findOne({_id: params._id})
        .then((jokeOne) => res.json(jokeOne))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }))
};

const createNewJoke =(req,res) => {
    const {body} = req;
    Joke.create (body)
        .then((newJoke) => res.json(newJoke))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }))
};

const updateJoke = (req,res) => {
    Joke.findOneAndUpdate ({_id: req.params._id}, req.body, {
        new: true,
        runValidators: true
    })
        .then((updatedJoke) => res.json(updatedJoke))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }))
};

const deleteJoke = (req,res) => {
    Joke.deleteOne ({_id: req.params._id})
        .then((deletedJoke) => res.json(deletedJoke))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }))
};


module.exports = {
    getAllJokes,
    getJokeById,
    createNewJoke,
    updateJoke,
    deleteJoke
};