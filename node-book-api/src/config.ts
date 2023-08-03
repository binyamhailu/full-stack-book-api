import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  dbConnectionString: process.env.DB_CONNECTION_STRING || 'postgres://postgres:changeme@localhost:5432/postgres',
};
