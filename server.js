const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('./public'));
app.get('/*', (request, response) => response.sendFile('index.html', {root: '.'}));
app.listen(PORT, function(){
  console.log(`being hosted on ${PORT}`);
});
