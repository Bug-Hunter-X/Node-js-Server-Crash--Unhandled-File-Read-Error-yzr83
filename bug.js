const http = require('http');

const server = http.createServer((req, res) => {
  // Without the error handling, this would crash the server if the file doesn't exist
  fs.readFile('./some_file.txt', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.writeHead(500);
      res.end('Internal Server Error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});