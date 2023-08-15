const Author = require('../models/author.model');

// Create Commands for Author

const createAuthor = (req, res) => {
    Author.exists({
        name: req.body.name
    })
    .then( authorExists => {
        if (authorExists) {
            return Promise.reject('This author name already exists!')
        }
        return Author.create(req.body);
    })
    .then(saveResult => res.json(saveResult))
    .catch((err) => res.status(400).json(err));
};

// Read Commands for Author

const findAllAuthors = (req, res) => {
    Author.find().sort({name: 1})
        .then((allAuthors) => {
            res.json(allAuthors)
        })
        .catch((err) => res.status(400).json(err));
};

const findAuthor = (req, res) => {
    Author.exists({ _id: req.params.id })
    .then( authorExists => {
        if (authorExists) {
            return Author.findOne({ _id: req.params.id })
        }
        return Promise.reject('This author does not exist!');
    })
    .then(saveResult => res.json(saveResult))
    .catch((err) => res.status(400).json(err));
};

// Update Commands for Author

const updateExistingAuthor = (req, res) => {
    Author.exists({ _id: req.params.id })
    .then( authorExists => {
        if (authorExists) {
            return Author.findOneAndUpdate({ _id: req.params.id },
                req.body, { new: true, runValidators: true }
                )
        }
        return Promise.reject('This author does not exist!');
    })
    .then(saveResult => res.json(saveResult))
    .catch((err) => res.status(400).json(err));
};

// Delete Commands for Author

const deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => res.status(400).json(err));
};

module.exports = {
    createAuthor,
    findAllAuthors,
    findAuthor,
    updateExistingAuthor,
    deleteAuthor
};