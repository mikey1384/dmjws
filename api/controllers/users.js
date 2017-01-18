const User = require('../models/user');

module.exports = {
  signup(req, res, next) {
    const userProps = req.body;
    User.create(userProps)
      .then(user => res.send(user))
      .catch(next)
  }
}
