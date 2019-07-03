#!/usr/bin/env node

var request = require("request");

const URL = process.argv[2];

console.log(URL)

request(URL, function(error, response, body) {
  console.log(body);
});