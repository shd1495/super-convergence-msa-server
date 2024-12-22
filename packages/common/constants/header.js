export const MESSAGE_TYPE_LENGTH = 2;
export const VERSION_LENGTH = 1;
export const SEQUENCE_LENGTH = 4;
export const PAYLOAD_LENGTH = 4;

export const MESSAGE_TYPE = {
  // Auth (1~8)
  REGISTER_REQUEST: 1,
  REGISTER_RESPONSE: 2,
  LOGIN_REQUEST: 3,
  LOGIN_RESPONSE: 4,

  // Gate
  CLOSE_SOCKET_REQUEST: 9,
  // Distributor (10)
  SERVER_INFO_NOTIFICATION: 10,

  // Lobby (11-30)
  LOBBY_JOIN_REQUEST: 11,
  LOBBY_JOIN_RESPONSE: 12,
  LOBBY_LEAVE_REQUEST: 13,
  LOBBY_LEAVE_RESPONSE: 14,
  LOBBY_USER_LIST_REQUEST: 15,
  LOBBY_USER_LIST_RESPONSE: 16,
  LOBBY_USER_DETAIL_REQUEST: 17,
  LOBBY_USER_DETAIL_RESPONSE: 18,

  // Room (31-50)
  ROOM_LIST_REQUEST: 31,
  ROOM_LIST_RESPONSE: 32,
  CREATE_ROOM_REQUEST: 33,
  CREATE_ROOM_RESPONSE: 34,
  JOIN_ROOM_REQUEST: 35,
  JOIN_ROOM_RESPONSE: 36,
  JOIN_ROOM_NOTIFICATION: 37,
  LEAVE_ROOM_REQUEST: 38,
  LEAVE_ROOM_RESPONSE: 39,
  LEAVE_ROOM_NOTIFICATION: 40,
  GAME_PREPARE_REQUEST: 41,
  GAME_PREPARE_RESPONSE: 42,
  GAME_PREPARE_NOTIFICATION: 43,
  ROOM_KICK_REQUEST: 44,
  ROOM_KICK_RESPONSE: 45,
  ROOM_KICK_NOTIFICATION: 46,

  // Game start (51-60)
  GAME_START_REQUEST: 51,
  GAME_START_NOTIFICATION: 52,

  // Game Play (61-90)
  ROLL_DICE_REQUEST: 61,
  ROLL_DICE_RESPONSE: 62,
  ROLL_DICE_NOTIFICATION: 63,
  MOVE_PLAYER_BOARD_REQUEST: 64,
  MOVE_PLAYER_BOARD_RESPONSE: 65,
  MOVE_PLAYER_BOARD_NOTIFICATION: 66,
  PURCHASE_TILE_REQUEST: 67,
  PURCHASE_TILE_RESPONSE: 68,
  PURCHASE_TILE_NOTIFICATION: 69,
  GAME_END_NOTIFICATION: 70,
  PURCHASE_TROPHY_REQUEST: 71,
  PURCHASE_TROPHY_RESPONSE: 72,
  PURCHASE_TROPHY_NOTIFICATION: 73,
  TILE_PENALTY_REQUEST: 74,
  TILE_PENALTY_RESPONSE: 75,
  TILE_PENALTY_NOTIFICATION: 76,
  DICE_GAME_REQUEST: 77,
  DICE_GAME_RESPONSE: 78,
  DICE_GAME_NOTIFICATION: 79,
  TURN_END_REQUEST: 80,
  TURN_END_NOTIFICATION: 81,
  BOARD_GOLD_SYNC_NOTIFICATION: 82,

  // Post Game (91-100)
  BACK_TO_THE_ROOM_REQUEST: 91,
  BACK_TO_THE_ROOM_RESPONSE: 92,
  BACK_TO_THE_ROOM_NOTIFICATION: 93,

  // Mini Game (101-110)
  START_MINI_GAME_REQUEST: 101,

  // Ice Game (201-212)
  ICE_MINI_GAME_READY_NOTIFICATION: 201,
  ICE_GAME_READY_REQUEST: 202,
  ICE_GAME_READY_NOTIFICATION: 203,
  ICE_MINI_GAME_START_NOTIFICATION: 204,
  ICE_PLAYER_SYNC_REQUEST: 205,
  ICE_PLAYERS_SYNC_NOTIFICATION: 206,
  ICE_PLAYER_DAMAGE_REQUEST: 207,
  ICE_PLAYER_DAMAGE_NOTIFICATION: 208,
  ICE_PLAYER_DEATH_NOTIFICATION: 209,
  ICE_GAME_OVER_NOTIFICATION: 210,
  ICE_MAP_SYNC_NOTIFICATION: 211,

  // drop (301 ~ 320)
  DROP_MINI_GAME_READY_NOTIFICATION: 301,
  DROP_GAME_READY_REQUEST: 302,
  DROP_GAME_READY_NOTIFICATION: 303,
  DROP_MINI_GAME_START_NOTIFICATION: 304,
  DROP_PLAYER_SYNC_REQUEST: 305,
  DROP_PLAYER_SYNC_NOTIFICATION: 306,
  DROP_PLAYER_DEATH_NOTIFICATION: 307,
  DROP_LEVEL_START_NOTIFICATION: 308,
  DROP_LEVEL_END_NOTIFICATION: 309,
  DROP_GAME_OVER_NOTIFICATION: 310,

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

  // Bomb Game (501 - 520)
  BOMB_MINI_GAME_READY_NOTIFICATION: 501,
  BOMB_GAME_READY_REQUEST: 502,
  BOMB_GAME_READY_NOTIFICATION: 503,
  BOMB_MINI_GAME_START_NOTIFICATION: 504,
  BOMB_PLAYER_SYNC_REQUEST: 505,
  BOMB_PLAYERS_SYNC_NOTIFICATION: 506,
  BOMB_PLAYER_DEATH_NOTIFICATION: 507,
  BOMB_MOVE_REQUEST: 508,
  BOMB_MOVE_NOTIFICATION: 509,
  BOMB_GAME_OVER_NOTIFICATION: 510,

  // 다트게임 : 601 ~
  DART_MINI_GAME_READY_NOTIFICATION: 601,
  DART_GAME_READY_REQUSET: 602,
  DART_GAME_READY_NOTIFICATION: 603,
  DART_MINI_GAME_START_NOTIFICATION: 604,
  DART_GAME_THROW_REQUEST: 605,
  DART_GAME_THROW_NOTIFICATION: 606,
  DART_GAME_OVER_NOTIFICATION: 607,
  DART_PANNEL_SYNC_REQUEST: 608,
  DART_PANNEL_SYNC_NOTIFICATION: 609,
  DART_SYNC_REQUEST: 610,
  DART_SYNC_NOTIFICATION: 611,
  DART_POINT_REQUEST: 612,
  DART_POINT_NOTIFICATION: 613,
};
