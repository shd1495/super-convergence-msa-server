export const MESSAGE_TYPE_LENGTH = 2;
export const VERSION_LENGTH = 1;
export const SEQUENCE_LENGTH = 4;
export const PAYLOAD_LENGTH = 4;

export const MESSAGE_TYPE = {
  // Auth (1~9)
  REGISTER_REQUEST: 1,
  REGISTER_RESPONSE: 2,
  LOGIN_REQUEST: 3,
  LOGIN_RESPONSE: 4,

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
  ORDER_OF_THE_DICE_REQUEST: 77,
  ORDER_OF_THE_DICE_RESPONSE: 78,
  ORDER_OF_THE_DICE_NOTIFICATION: 79,

  // Post Game (91-100)
  BACK_TO_THE_ROOM_REQUEST: 91,
  BACK_TO_THE_ROOM_RESPONSE: 92,
  BACK_TO_THE_ROOM_NOTIFICATION: 93,

  // Ice Game (201-212)
  ICE_MINI_GAME_START_REQUEST: 201,
  ICE_MINI_GAME_READY_NOTIFICATION: 202,
  ICE_GAME_READY_REQUEST: 203,
  ICE_GAME_READY_NOTIFICATION: 204,
  ICE_MINI_GAME_START_NOTIFICATION: 205,
  ICE_PLAYER_SYNC_REQUEST: 206,
  ICE_PLAYERS_SYNC_NOTIFICATION: 207,
  ICE_PLAYER_DAMAGE_REQUEST: 208,
  ICE_PLAYER_DAMAGE_NOTIFICATION: 209,
  ICE_PLAYER_DEATH_NOTIFICATION: 210,
  ICE_GAME_OVER_NOTIFICATION: 211,
  ICE_MAP_SYNC_NOTIFICATION: 212,
};
