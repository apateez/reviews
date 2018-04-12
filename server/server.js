const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3005;
const Stores = require('./../db/models/store.js');


const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/api', function(req, res){
  // console.log('hello')
  // console.log(req.params)
  console.log('find one triggered')
  var place_id = 'ChIJK6Yru_GAhYARLzuWvZIgCc4'
  Stores.findOne(place_id)
  .then(function(data) {
    console.log('data ', data)
    res.send(data[0])
  })
});


app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
