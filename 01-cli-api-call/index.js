#!/usr/bin/env node
// Added shebang

var request = require("request");
// importing "request" module

const URL = process.argv[2];
// const of URL. Since node runs as "node filename -arg", [2] is the correct index

console.log(URL)
// logging for debugging purpose, to see if const actually worked

request(URL, function(error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log(body);
});

/*
Used "request" module. The first parameter passing was a hard-coded URL,
so I just replaced it with my own const, URL. I honestly just copied and pasted
(error, response, body) from the library github, as referenced.

First line is error. I would have to trigger it once the code enters error state,
but I stil haven't figure out how.

Second line of to return the status code of http call.

Final line is to output the body of responses.

*/