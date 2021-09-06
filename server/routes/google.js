require("dotenv").config();
const express = require("express");
const pool = require("../modules/pool");

const axios = require("axios");

const router = express.Router();

router.get("/", (req, res) => {

  const json = JSON.parse(req.query.q)
  const name = json["lawFirmName"]
  const city_name = json["lawFirmCity"] 
  const state_name = json["lawFirmState"];

  console.log(name, city_name, state_name)

  console.log('query is', req.query.q);

  const config = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/textsearch/json?input=${name}%20near%20${
      (city_name, state_name)
    }&key= ${process.env.GOOGLE_API_KEY}`,
  };

 console.log(config)

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.send(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
