import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  port: process.env.PORT,
  auth: {
    secret: process.env.TOKEN_SECRET,
    expiresIn: process.env.TOKEN_EXPIRES_IN,
  },
};
