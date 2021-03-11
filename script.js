const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    console.log(req.url);
    let body = null;
    try {
        const ext = req.url.split('.')[1];
        const isSvg = ext === 'svg';
        if (isSvg) {
            res.setHeader('Content-Type', 'image/svg+xml');
        }
        body = fs.readFileSync(`./lesson2${req.url}`)
    } catch (err) {
        body = fs.readFileSync('./lesson2/index.html')
    }
    res.end(body);
});
server.listen(process.env.PORT || 2900);
console.log('Server started');