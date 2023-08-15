const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.findAuthor);
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.patch('/api/authors/:id', AuthorController.updateExistingAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor)
};