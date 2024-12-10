import { FIELD_NAME, ROOM_STATE, STATE } from '../constants/enums.js';
import { FAIL_CODE } from '../constants/failcodes.js';
import {
  MESSAGE_TYPE_LENGTH,
  VERSION_LENGTH,
  PAYLOAD_LENGTH,
  SEQUENCE_LENGTH,
  MESSAGE_TYPE,
} from '../constants/header.js';

export const config = {
  SERVER_NAME: 'SERVER_NAME',
  CLIENT: {
    VERSION: '1.0.0',
  },
  PACKET: {
    TOTAL_LENGTH: MESSAGE_TYPE_LENGTH + VERSION_LENGTH + SEQUENCE_LENGTH + PAYLOAD_LENGTH,
    MESSAGE_TYPE_LENGTH: MESSAGE_TYPE_LENGTH,
    VERSION_LENGTH: VERSION_LENGTH,
    SEQUENCE_LENGTH: SEQUENCE_LENGTH,
    PAYLOAD_LENGTH: PAYLOAD_LENGTH,
  },
  FAIL_CODE,
  MESSAGE_TYPE,
  ROOM_STATE,
  FIELD_NAME,
  STATE,
};
