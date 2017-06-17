module.exports = function(app, pool) {
  app.use('/user', require('./controllers/users'))
}
