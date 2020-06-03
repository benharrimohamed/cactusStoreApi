const http = require('http');
const port = 3000 || process.env.PORT;
const app = require ('./src/app');
const server = http.createServer(app);
server.listen(port, () => {
    console.log('[node] server is running ...');
})
