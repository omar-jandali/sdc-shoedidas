const express = require('express');
const db = require('../database/models.js');
const Op = require("sequelize").Op;

// TO USE: db.Products.aMethodHere
const generateNumber = () => {
  let value = 9000000 +  Math.floor(Math.random() * 999930)
  console.log(value)
  return value
}

const Controller = {
  get: (req, res) => {
    db.Products.findAll({
      where:{
        id:{
          [Op.gt]:generateNumber()
        },
      },
      limit:55
    })
      .then((data) => { 
        res.status(200).send(data)
      })
      .catch(err => console.error(err));
  },

  post: (req, res) => {
    res.send('hello from post');
  },

  update: (req, res) => {
    res.send('hello from update');
  },

  delete: (req, res) => {
    res.send('hello from delete');
  },
};

module.exports = { Controller };
