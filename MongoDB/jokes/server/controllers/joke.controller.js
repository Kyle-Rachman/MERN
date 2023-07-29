const Joke = require('../models/joke.model');

// Create Commands for Joke

module.exports.createJoke = (req, res) => {
    Joke.exists({
        setup: req.body.setup,
        punchline: req.body.punchline
    })
    .then( jokeExists => {
        if (jokeExists) {
            return Promise.reject('This joke already exists!')
        }
        return Joke.create(req.body);
    })
    .then(saveResult => res.json(saveResult))
    .catch((err) => res.json(err));
};

// Read Commands for Joke

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => res.json(err));
};

module.exports.findJoke = (req, res) => {
    Joke.exists({ _id: req.params.id })
    .then( jokeExists => {
        if (jokeExists) {
            return Joke.findOne({ _id: req.params.id })
        }
        return Promise.reject('This joke does not exist!');
    })
    .then(saveResult => res.json({ joke: saveResult}))
    .catch((err) => res.json(err));
};

module.exports.findRandomJoke = (req, res) => {
    Joke.countDocuments()
        .then((count) => {
            let random = Math.floor(Math.random() * count);
            return Joke.findOne().skip(random)
        })
        .then((result) => res.json({ randomJoke: result }))
        .catch((err) => res.json(err));
};

// Update Commands for Joke

module.exports.updateExistingJoke = (req, res) => {
    Joke.exists({ _id: req.params.id })
    .then( jokeExists => {
        if (jokeExists) {
            return Joke.findOneAndUpdate({ _id: req.params.id },
                req.body, { new: true, runValidators: true }
                )
        }
        return Promise.reject('This joke does not exist!');
    })
    .then(saveResult => res.json({ updatedJoke: saveResult}))
    .catch((err) => res.json(err));
};

// Delete Commands for Joke

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then((result) => {
            req.json({ result: result})
        })
        .catch((err) => res.json(err));
};