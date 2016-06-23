import express from 'express';
import fs from 'fs';

const port = 3000;
const layout = fs.readFileSync(__dirname + '/layout.html', 'utf8');

let app = express();

app.use('/js', express.static(__dirname + '/../public/js'));

app.get('*', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(layout);
});

app.listen(port, () => {
    console.log(`App listening at port ${port}!`);
});