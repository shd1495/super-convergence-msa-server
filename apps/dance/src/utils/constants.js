export const MESSAGE_TYPE = {
  // Gate
  CLOSE_SOCKET_REQUEST: 9,
  // dance (400 ~ 499)
  DANCE_MINI_GAME_READY_NOTIFICATION: 401,
  DANCE_READY_REQUEST: 402,
  DANCE_READY_NOTIFICATION: 403,
  DANCE_START_NOTIFICATION: 404,
  DANCE_TABLE_CREATE_REQUEST: 405,
  DANCE_TABLE_NOTIFICATION: 406,
  DANCE_KEY_PRESS_REQUEST: 407,
  DANCE_KEY_PRESS_RESPONSE: 408,
  DANCE_KEY_PRESS_NOTIFICATION: 409,
  DANCE_GAME_OVER_NOTIFICATION: 410,
  DANCE_CLOSE_SOCKET_NOTIFICATION: 411,
  DANCE_TABLE_COMPLETE_REQUEST: 412,
};

export const GAME_STATE = {
  WAIT: 0,
  START: 1,
};

export const REASON = {
  TIME_OVER: 0,
  COMPLETE: 1,
};

export const DIRECTION = {
  UP: 0,
  DOWN: 180,
  LEFT: 90,
  RIGHT: 270,
};
