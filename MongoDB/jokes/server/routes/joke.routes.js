const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/random', JokeController.findRandomJoke);
    app.get('/api/jokes/:id', JokeController.findJoke);
    app.post('/api/jokes/new', JokeController.createJoke);
    app.patch('/api/jokes/:id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke)
}