const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Input</title></html>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="pesan"><button type="submit">Submit</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if(url === '/message' && method === 'POST'){
    const body = [];
    req.on('data',(chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message, err => {
        res.statusCode = 302;
      res.setHeader('location', '/');
      return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first Node.js Server</title></html>');
  res.write('<body>Hello World !!</body>');
  res.write('</html>');
  res.end();
  
};

//module.exports = {

//  handler: requestHandler,
//  someText: 'percobaan pertama kali' 
//};

module.exports.handler = requestHandler;
module.exports.someText = 'percobaan pertama kali';