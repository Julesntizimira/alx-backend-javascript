const http = require('node:http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.end('Welcome to the homepage!');
});

app.listen(port, hostname, () => {
  console.log('...');
});
