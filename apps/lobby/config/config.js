import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT, REDIS_USERNAME, REDIS_USERPASS } from './env.js';

export const config = {
  REDIS: {
    HOST: REDIS_HOST,
    PORT: REDIS_PORT,
    PASSWORD: REDIS_PASSWORD,
    USERNAME: REDIS_USERNAME,
    USERPASS: REDIS_USERPASS,
  },
};
