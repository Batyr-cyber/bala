const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://batyr:4PDzupGjDkK7gzrvjomZOrf0CRwxHszU@dpg-d28ba4ogjchc7395edm0-a.oregon-postgres.render.com/bala_db',
    ssl: { rejectUnauthorized: false }
})

module.exports = pool
