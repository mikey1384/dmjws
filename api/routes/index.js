const UsersController = require('../controllers/users');

module.exports = (app) => {
  //app.get('/users', UsersController.login);
  app.post('/users', UsersController.signup);
}
