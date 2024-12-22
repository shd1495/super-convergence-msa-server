import { MESSAGE_TYPE } from '../../utils/constants.js';
import lobbyManager from '../../classes/manager/lobby.manager.js';
import { createResponse } from '../../utils/create.response.js';
import { handleError } from '../../utils/handle.error.js';

export const lobbyUserDetailRequestHandler = async ({ socket, payload }) => {
  const { sessionId, targetSessionId } = payload;

  try {
    const result = await lobbyManager.getUserDetail(targetSessionId);

    const packet = createResponse(result, MESSAGE_TYPE.LOBBY_USER_DETAIL_RESPONSE, sessionId);

    socket.write(packet);
  } catch (error) {
    handleError(socket, MESSAGE_TYPE.LOBBY_USER_DETAIL_RESPONSE, sessionId, error);
  }
};
