const fs = require('fs');
const http = require('http');
const port = 3000;

const requestHandler = (request,response) => {

  fs.appendFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
    if (err) throw err;
    console.log("The data was appended to the file!");
  });
  response.end(`Handling a request on port ${port}`);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error: ${err}`);
  }
  console.log(`Server is listening on ${port}`);
  process.exit(1);
});
