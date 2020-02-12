const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('User', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
  tableName: 'Users'
})
module.exports = User