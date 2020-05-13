const express = require('express');

const projects = require('./projects.json').projects;



const app = express();



app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {

    res.render('index', {"projects" : projects});

});

app.get('/about', (req, res) => {

    res.render('about');

});


app.get('/project/:id', (req, res) => {

    res.render('project', data.value[req.params.id]);

});


app.listen(3000);
