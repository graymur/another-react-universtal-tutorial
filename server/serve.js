import express from 'express';
import fs from 'fs';
import data from './data.json';

const port = 3000;
const layout = fs.readFileSync(__dirname + '/layout.html', 'utf8');

let app = express();

app.all('/api/:endpoint', (req, res) => {
    if (typeof data[req.params.endpoint] === 'undefined') {
        res.status(404).send('Not found');
    } else {
        setTimeout(() => {
            if (req.params.endpoint === 'blog') {
                res.status(404).send('Not found');
            } else {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(data[req.params.endpoint]));
            }
        }, Math.random() * (2000 - 500) + 500);
    }
});

app.use('/js', express.static(__dirname + '/../public/js'));

app.get('*', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(layout);
});

app.listen(port, () => {
    console.log(`App listening at port ${port}!`);
});