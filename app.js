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

    res.render('project', {"project" : projects[req.params.id]});

});


app.use((req, res, next) =>
    {
        const err = new Error('Page not found.')
        err.status = 404;
        next(err);
    });

app.use((err, req, res, next) =>
    {
        res.locals.error = err;
        res.status(err.status);
        res.render('error');
    });


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);
