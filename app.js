const express = require('express');
const hbs = require('hbs');
const path = require('path');
const config = require('./config/config');
const { sequelize } = require('./db/models');

const indexRouter = require('./routes/indexRouter');
const basketRouter = require('./routes/basketRouter');
const editRouter = require('./routes/editRouter');
const loginRouter = require('./routes/loginRouter');
const registrationRouter = require('./routes/registrationRouter');
const storageRouter = require('./routes/storageRouter');

const app = express();
const PORT = process.env.PORT ?? 3000;

// подключение hbs
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(`${__dirname}/views/partials`);

config(app);

// Маршрутизация
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/basket', basketRouter);
app.use('/edit', editRouter);
app.use('/registration', registrationRouter);
app.use('/storage', storageRouter);

app.listen(PORT, async () => {
  console.log('Сервер запущен на порту', PORT);

  try {
    await sequelize.authenticate();
    console.log('Подключение к БД успешно');
  } catch {
    console.log('Не получилось подключиться к БД');
  }
});
