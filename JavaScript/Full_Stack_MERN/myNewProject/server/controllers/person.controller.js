const Person = require('../models/person.model');

module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
       message: "Hello World"
    });
}

module.exports.createPerson = (req,res) => {
    Person.create(req.body)
        .then(person => res.json(person))
        .catch(err => res.json(err));
}

module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => {
            console.log(persons);
            res.json(persons);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err));
}