const dotenv = require('dotenv');

dotenv.config();

const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE_NAME;
const host = process.env.DATABASE_HOST;
const dialect = 'postgres';

module.exports = {
  dialect,
  host,
  username,
  password,
  database,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
