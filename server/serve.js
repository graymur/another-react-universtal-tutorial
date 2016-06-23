import express from 'express';
import fs from 'fs';
import data from './data.json';

const port = 3000;
const layout = fs.readFileSync(__dirname + '/layout.html', 'utf8');

let app = express();

app.all('/api/:endpoint', (req, res) => {
    setTimeout(() => {
        let result;

        try {
            if (typeof data[req.params.endpoint] === 'undefined') throw new Error('Endpoint does not exist');

            if (req.params.endpoint === 'page') {
                if (!req.query.splat) throw new Error('Splat is empty');
                if (!data.page[req.query.splat]) throw new Error('Splat not found');

                result = data.page[req.query.splat];
            } else {
                result = data[req.params.endpoint];
            }

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(result));
        } catch (e) {
            res.status(404).send(String(e));
        }
    }, Math.random() * (2000 - 500) + 500);
});

app.use('/js', express.static(__dirname + '/../public/js'));

app.get('*', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(layout);
});

app.listen(port, () => {
    console.log(`App listening at port ${port}!`);
});