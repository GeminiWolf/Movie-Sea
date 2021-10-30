const express = require('express');
const server = express();
const path = require('path');

// port
const port = process.env.PORT || 3000

// parser
server.use(express.urlencoded({ extended: false }))
server.use(express.json())

let watched = [
    {
        id: '33',
        title: 'hee'
    }
];

// apis
server.get('/api/shows', (req, res) => {
    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=99f76dbcb887e6e1d58ef8e0bd37f594')
      .then((r) => r.json())
      .then((d) => {
        console.log(d)
        res.json(d.results)
      })
});

server.get('/api/watched', (req, res) => {
    res.send(watched)
});

server.post('/api/watched', (req, res) => {
    const [id, title, imgURL, year] = req.body;

    watched.push({
        id: id,
        title: title,
        year: year,
        imgURL: imgURL,
    })
})

server.listen(port, () => {
    console.log('Listening to port', port)
});