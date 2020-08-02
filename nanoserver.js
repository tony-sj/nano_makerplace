const express = require('express');
const path = require('path');

const app = express();
const server = require('http').Server(app);

app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'nano.html'));
});


server.listen(process.env.PORT || 5000);