const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);

const sessionsConfig = {
  // store: new FileStore(), // Создаёт папку sessions, а в ней файл с id сессии и наполнение сессии
  // name: 'user_id', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  // secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  // resave: false, // Пересохранять ли куку при каждом запросе
  // saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  // cookie: {
  //   maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
  //   httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  // },
};

module.exports = sessionsConfig;
