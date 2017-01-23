const User = require('../models/user');

module.exports = {
  signup(req, res, next) {
    console.log("came in")
    const userProps = req.body;
    User.create(userProps)
      .then(user => res.send(user))
      .catch(next)
  }
}
