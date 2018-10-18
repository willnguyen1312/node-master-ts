import * as http from 'http';
import * as url from 'url';

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
});

server.listen(3000, () => console.log(`Listen on port 3000`));