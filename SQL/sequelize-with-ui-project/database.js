const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sample_app', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = sequelize;