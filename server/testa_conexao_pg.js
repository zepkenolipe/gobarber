const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5433,
  user: 'postgres',
  password: 'admin',
  database: 'gobarber',
});

client.connect()
  .then(() => {
    console.log('Conexão com PostgreSQL bem-sucedida!');
    return client.end();
  })
  .catch(err => {
    console.error('Erro ao conectar no PostgreSQL:', err.message);
    process.exit(1);
  }); 