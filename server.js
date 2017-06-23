'use strict';
// assinging the express library to an express variable and making sure express is a dependancy
const express = require('express');
// looking for a given port or defaulting to localhost://3000
const PORT = process.env.PORT || 3000;
// running express through the variable app
const app = express();
// giving express a default pathway
app.use(express.static('./public'));
// if any URL pathway is requested it will send index.html, URL pathways are handled by page.js
app.get('/*', (request, response) => response.sendFile('public/index.html', {root: '.'}));
// gives a port for node to listen on, if any changes are made it will restart
app.listen(PORT, function(){
  console.log(`being hosted on ${PORT}`);
});
