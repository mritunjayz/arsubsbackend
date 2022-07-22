const http = require('http'); // Loads the http module 
const axios = require('axios');

console.log('llllll')

http.createServer((request, response) => {
    
    // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
    response.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
    });
    console.log(request,'reqqqq')

    // 2. Write the announced text to the body of the page

    axios
  .post('https://api-translate.systran.net/translation/text/translate', {
    input: 'Buy the milk',
    target: 'hi',
  }, {
    headers: {
      Authorization: 'Key f7c1bb3b-a7bb-4736-b4ce-73fd305eaf9c',
    }
  })
  .then(res => {
    //console.log(`statusCode: ${res.status}`);
    //console.log(res, res.data.outputs[0].output);
    response.write(res.data.outputs[0].output);
    response.end();
  })
  .catch(error => {
    console.error(error);
  });



    // 3. Tell the server that all of the response headers and body have been sent
    

}).listen(5000); // 4. Tells the server what port to be on