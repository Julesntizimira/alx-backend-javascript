// Importing the http module
const http = require('http');

// Creating the HTTP server
const app = http.createServer((req, res) => {
  // Setting the status code and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Sending the response body
  res.end('Hello Holberton School!\n');
});

// Listening on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Exporting the app variable
module.exports = app;
