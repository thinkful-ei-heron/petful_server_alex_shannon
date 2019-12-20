const express = require('express');
const STORE = require('../Store');

const catRouter = express.Router();

catRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(STORE.cats[1]);
  });

module.exports = catRouter;