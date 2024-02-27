const http = require('node:http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  // Set response headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Routing
  if (req.url === '/') {
    // Handle root route
    res.end('Welcome to the homepage!');
  }
});

app.listen(port, hostname, () => {
  console.log('...');
});
