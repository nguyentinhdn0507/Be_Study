const configENV = {
  app: {
    port: process.env.DEV_APP_PORT || 3000,
  },
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || "shopEcommerce",
  },
};
const config = { configENV };
const env = process.env.NODE_ENV || "configENV";
module.exports = config[env];
