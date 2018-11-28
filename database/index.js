const mysql = require('mysql');
const pg = require('pg');
const Sequelize = require('sequelize');
const { env } = require('../env/.env');

const sequelize = new Sequelize('sdc', 'omarjandali', 'hackreactor25', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => console.log('connect to postgres!'))
  .catch(err => console.error(err));

module.exports = sequelize;
