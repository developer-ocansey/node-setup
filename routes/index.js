const userController = require('../controllers/userController')

const routes = [
  {
    method: 'GET',
    url: '/api/',
    handler: userController.user
  }
]

module.exports = routes