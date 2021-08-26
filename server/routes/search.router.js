require('dotenv').config();
const express = require('express');
const pool = require('../modules/pool');

const axios = require('axios')

const router = express.Router();

router.get('/', (req, res) => {
    axios({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search',
      params: {
        api_key: process.env.GIPHY_API_KEY
      }
    })
    .then((response) => {
      console.log('api response ', response.data.data);
      res.send(response.data.data)
    })
    .catch(err => {
      console.log('giphy err', err.response.data);
      res.sendStatus(500);
    });
  
  });

  module.exports = router;