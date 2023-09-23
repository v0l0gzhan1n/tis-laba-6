const express = require('express');

const app1 = express();

app1.set('view engine', 'hbs');
app1.set('views', 'templates'); // установка пути к представлениям

app1.use('/contact', function (request, response) {
    response.render('contact');
});

app1.listen(2000);

const express1 = require('express');

const app = express1();
app.set('view engine', 'hbs');

app.use('/contact', function (request, response) {
    response.render('contact.hbs', {
        title: 'Мои контакты',
        emailsVisible: true,
        emails: ['gavgav@mycorp.com', 'mioaw@mycorp.com'],
        phone: '+1234567890',
    });
});

app.use('/', function (request, response) {
    response.send('Главная страница');
});
app.listen(3000);

// const express = require('express');

// const app = express();

// app.set('view engine', 'hbs');

// app.use('/contact', function (request, response) {
//     response.render('contact.hbs', {
//         title: 'Мои контакты',
//         email: 'gavgav@mycorp.com',
//         phone: '+1234567890',
//     });
// });
// app.use('/', function (request, response) {
//     response.send('Главная страница');
// });
// app.listen(3000);

// const express = require('express');

// const app = express();

// app.set('view engine', 'hbs');

// app.use('/contact', function (request, response) {
//     response.render('contact.hbs');
// });
// app.use('/', function (request, response) {
//     response.send('Главная страница');
// });
// app.listen(3000);
