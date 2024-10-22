const http = require('http');
const url = require('url');

// Handling query parameters
const server3 = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const queryobject = url.parse(req.url,true).query;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json'); // Fixed the method name
        res.end(JSON.stringify({ message: 'You are in the right position', status: 'Success',query: queryobject }));
    }
});

server3.listen(5000, () => {
    console.log("Server running at http://localhost:5000/json");
});
