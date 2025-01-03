import { MESSAGE_TYPE } from '../../utils/constants.js';
import roomManager from '../../classes/manager/room.manager.js';
import { createResponse } from '../../utils/create.response.js';
import { handleError } from '../../utils/handle.error.js';
import { createNotification } from '../../utils/create.notification.js';
import Room from '../../classes/models/room.class.js';
import { redis } from '../../init/redis.js';
import RoomDTO from '../../classes/models/room.dto.js';

export const roomKickRequestHandler = async ({ socket, payload }) => {
  const { sessionId, targetSessionId } = payload;

  try {
    //* 강퇴 전 방 데이터 캐싱
    const roomId = await redis.getUserLocationField(sessionId, 'room');
    const roomData = RoomDTO.fromRedis(await redis.getRoom(roomId));

    const result = await roomManager.kickUser(sessionId, targetSessionId);

    const responsePacket = createResponse(result, MESSAGE_TYPE.ROOM_KICK_RESPONSE, sessionId);
    socket.write(responsePacket);

    //* 요청이 성공했으면 noti
    if (result.success) {
      const otherSessionIds = Room.getOtherSessionIds(
        await RoomDTO.toResponse(roomData),
        sessionId,
      );

      if (otherSessionIds.length > 0) {
        const notificationPacket = createNotification(
          { room: result.data, targetSessionId: result.targetSessionId },
          MESSAGE_TYPE.ROOM_KICK_NOTIFICATION,
          otherSessionIds,
        );
        socket.write(notificationPacket);
      }
    }
  } catch (error) {
    handleError(socket, MESSAGE_TYPE.ROOM_KICK_RESPONSE, sessionId, error);
  }
};
