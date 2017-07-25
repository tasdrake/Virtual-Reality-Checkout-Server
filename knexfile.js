  module.exports = {
    development: {
      client: 'pg',
      connection: {
        database: process.env.DATABASE_URL || 'reality_garage_app',
      }
    },
    production:{
      client: 'pg',
      connection: process.env.DATABASE_URL
    }
  };
