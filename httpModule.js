


//Use the createServer() method to create an HTTP server:

const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });


// const server = http.createServer((req, res) => {
//   if (req.method === 'GET' && req.url === '/') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('You made a GET request to the homepage!');
//   } else if (req.method === 'POST' && req.url === '/submit') {
//     let body = '';

//     req.on('data', (chunk) => {
//       body += chunk.toString();
//     });

//     req.on('end', () => {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'application/json');
//       res.end(JSON.stringify({ message: 'POST request received', data: body }));
//     });
//   } else {
//     res.statusCode = 404;
//     res.end('Not Found');
//   }
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

// server.close();
const server2 = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'You are in Home page of App', status: 'Success' }));
  }
});

server2.listen(4000, () => {
  console.log('Server running at http://localhost:4000/json');
});
