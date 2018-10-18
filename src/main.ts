import * as http from 'http';
import * as url from 'url';
import { StringDecoder } from 'string_decoder';

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  const path = parsedUrl.path;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  const queryStringObject = parsedUrl.query;

  const method = req.method.toLowerCase();

  const headers = req.headers;

  const decoder = new StringDecoder('utf-8');
  let buffer = '';

  req.on('data', data => {
    buffer += decoder.write(data);
  });

  req.on('end', () => {
    buffer += decoder.end();

    res.end(buffer);

    console.log(`Request received with these payloads ${buffer}`);
  });
});

server.listen(3000, () => console.log(`Listen on port 3000`));
