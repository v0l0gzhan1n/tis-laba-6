const express = require('express');
const expressHbs = require('express-handlebars');
const hbs = require('hbs');
const app = express();



// устанавливаем настройки для файлов layout
app.engine(
    'hbs',
    expressHbs.engine({
        layoutsDir: __dirname + '/views/layouts',
        defaultLayout: __dirname + '/views/layouts/layout.hbs',
        extname: 'hbs',
    })
);
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use('/contact', function (request, response) {
    response.render(__dirname + '/views/contact.hbs', {
        title: 'Мои контакты',
        emailsVisible: true,
        emails: ['gavgav@mycorp.com', 'mioaw@mycorp.com'],
        phone: '+1234567890',
    });
});

app.use('/', function (request, response) {
    response.render(__dirname + '/views/home.hbs');
});
app.listen(3000);