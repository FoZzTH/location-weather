import * as dotenv from 'dotenv';
dotenv.config();

export const env = {
  server: {
    port: Number(process.env.SERVER_PORT) || 3000,
  },
};
