const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000
const http = require('http'); // Loads the http module 
const axios = require('axios');
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/', (req, res) => {
  //res.send('Hello World!')
  console.log(req.body, req.data, req)
//   res.writeHead(200, {
//     'Content-Type': 'application/json; charset=utf-8'
// });


  axios
  .post('https://api-translate.systran.net/translation/text/translate', {
    input: req.body.text,
    target: 'hi',
  }, {
    headers: {
      Authorization: 'Key f7c1bb3b-a7bb-4736-b4ce-73fd305eaf9c',
    }
  })
  .then(data => {
    //console.log(`statusCode: ${res.status}`);
    //console.log(res, res.data.outputs[0].output);
    res.send(data.data.outputs[0].output);
    //response.end();
  })
  .catch(error => {
    console.error(error);
  });

})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${process.env.PORT || port}!`)
})