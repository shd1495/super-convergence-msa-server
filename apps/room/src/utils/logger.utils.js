import { createLogger } from '@repo/common/config';
import { LOGSTASH_HOST, LOGSTASH_PORT } from '../config/env.js';

const host = LOGSTASH_HOST;
const port = LOGSTASH_PORT;

export const logger = createLogger('ROOM', host, port);
