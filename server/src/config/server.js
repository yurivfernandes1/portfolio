export const serverConfig = {
  port: process.env.PORT || 3000,
  corsOptions: {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    optionsSuccessStatus: 200
  },
  api: {
    prefix: '/api'
  }
};