const express = require('express');
const app = express();
const redis = require("redis");
rclient = redis.createClient({
    port: process.env.REDIS_PORT || 6379,
    host: process.env.REDIS_HOST || '127.0.01'
});
rclient.on('error', (err) => {
    console.log(err.message);
});

app.get('/', function (req, res) {
    rclient.get("refresh_count", function (error, data) {
        if (error) {
            data = 0;
        } 
        data = parseInt(data || 0) + 1;
        rclient.set("refresh_count", data);
        res.send(`This page opened ${data || 1} times`);
    });
    
});

app.listen('3000', () => {
    console.log("Listening to port 3000");
});

app.use(function (req, res, next) {
    process.on('unhandledRejection', function (reason, p) {
        console.log("Unhandled Rejection:", reason.stack);
        res.status(500).send('Unknown Error');
        //or next(reason);
    });
});