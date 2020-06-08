/**
 * @fileoverview test sendBeacon
 * @author liuduan
 * @Date 2020-06-08 11:20:27
 * @LastEditTime 2020-06-08 11:26:41
 */
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    let str = '';
    req.on('data', (chunk) => {
        str += chunk;
    })
    req.on('end', () => {
        console.log(str);
        res.end(str);
    })
})

server.listen(9000);