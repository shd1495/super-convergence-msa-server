import { MESSAGE_TYPE } from '../utils/constants.js';
import { createRoomRequestHandler } from './room/create.room.handler.js';
import { roomListHandler } from './room/room.list.handler.js';
import { joinRoomRequestHandler } from './room/join.room.handler.js';
import { leaveRoomRequestHandler } from './room/leave.room.handler.js';
import { gamePrepareRequestHandler } from './room/game.prepare.handler.js';

const handlers = {
  // * room
  [MESSAGE_TYPE.ROOM_LIST_REQUEST]: {
    handler: roomListHandler,
    message: 'room.C2S_RoomListRequest',
    payload: 'roomListRequest',
  },
  [MESSAGE_TYPE.ROOM_LIST_RESPONSE]: {
    handler: undefined,
    message: 'room.S2C_RoomListResponse',
    payload: 'roomListResponse',
  },
  [MESSAGE_TYPE.CREATE_ROOM_REQUEST]: {
    handler: createRoomRequestHandler,
    message: 'room.C2S_CreateRoomRequest',
    payload: 'createRoomRequest',
  },
  [MESSAGE_TYPE.CREATE_ROOM_RESPONSE]: {
    handler: undefined,
    message: 'room.S2C_CreateRoomResponse',
    payload: 'createRoomResponse',
  },
  [MESSAGE_TYPE.JOIN_ROOM_REQUEST]: {
    handler: joinRoomRequestHandler,
    message: 'room.C2S_JoinRoomRequest',
    payload: 'joinRoomRequest',
  },
  [MESSAGE_TYPE.JOIN_ROOM_RESPONSE]: {
    handler: undefined,
    message: 'room.S2C_JoinRoomResponse',
    payload: 'joinRoomResponse',
  },
  [MESSAGE_TYPE.JOIN_ROOM_NOTIFICATION]: {
    handler: undefined,
    message: 'room.S2C_JoinRoomNotification',
    payload: 'joinRoomNotification',
  },
  [MESSAGE_TYPE.LEAVE_ROOM_REQUEST]: {
    handler: leaveRoomRequestHandler,
    message: 'room.C2S_LeaveRoomRequest',
    payload: 'leaveRoomRequest',
  },
  [MESSAGE_TYPE.LEAVE_ROOM_RESPONSE]: {
    handler: undefined,
    message: 'room.S2C_LeaveRoomResponse',
    payload: 'leaveRoomResponse',
  },
  [MESSAGE_TYPE.LEAVE_ROOM_NOTIFICATION]: {
    handler: undefined,
    message: 'room.S2C_LeaveRoomNotification',
    payload: 'leaveRoomNotification',
  },
  [MESSAGE_TYPE.GAME_PREPARE_REQUEST]: {
    handler: gamePrepareRequestHandler,
    message: 'room.C2S_GamePrepareRequest',
    payload: 'gamePrepareRequest',
  },
  [MESSAGE_TYPE.GAME_PREPARE_RESPONSE]: {
    handler: undefined,
    message: 'room.S2C_GamePrepareResponse',
    payload: 'gamePrepareResponse',
  },
  [MESSAGE_TYPE.GAME_PREPARE_NOTIFICATION]: {
    handler: undefined,
    message: 'room.S2C_GamePrepareNotification',
    payload: 'gamePrepareNotification',
  },
};

export const getHandlerByMessageType = (messageType) => {
  if (!handlers[messageType]) {
    console.error(`핸들러를 찾을 수 없습니다 : messageType : ${messageType}`);
    throw new Error(`핸들러를 찾을 수 없습니다 : messageType : ${messageType}`);
  }
  return handlers[messageType].handler;
};

export const getProtoTypeNameByMessageType = (messageType) => {
  if (!handlers[messageType]) {
    console.error(`프로토버퍼 메세지를 찾을 수 없습니다 : messageType : [${messageType}] `);
    throw new Error(`프로토버퍼 메세지를 수 없습니다 : messageType : [${messageType}] `);
  }
  return handlers[messageType].message;
};

export const getPayloadNameByMessageType = (messageType) => {
  if (!handlers[messageType]) {
    console.error(`프로토버퍼 메세지를 찾을 수 없습니다 : messageType : [${messageType}] `);
    throw new Error(`프로토버퍼 메세지를 수 없습니다 : messageType : [${messageType}] `);
  }
  return handlers[messageType].payload;
};
