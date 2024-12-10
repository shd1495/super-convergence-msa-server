import { TcpServer } from '@repo/common/classes';
import { config } from '@repo/common/config';
import { dropConfig } from '../../config/config.js';
import { redisUtil, subRedisClient } from '../../../utils/redis.js';
import { logger } from '../../../utils/logger.utils.js';
import dropperGameManager from '../managers/dropper.game.manager.js';
import { deserialize, packetParser } from '@repo/common/utils';
import { getHandlerByMessageType } from '../../handlers/index.js';

class DropperServer extends TcpServer {
  constructor(name, host, port, types = []) {
    super(name, host, port, types);

    this.subScriber = subRedisClient;

    this.subScriber.subscribe(dropConfig.REDIS.CHANNEL, dropConfig.REDIS.CHANNEL2, (err, count) => {
      if (err) {
        logger.error(`[Sbuscribe error] ==> `, err);
        return;
      }
      logger.info(`[Subscribed to ${count} channel(s).]`);
    });

    this.subScriber.on('message', async (channel, message) => {
      if (channel === dropConfig.REDIS.CHANNEL) {
        logger.info(`[Received ${dropConfig.REDIS.CHANNEL}] ===> ${channel}: ${message}`);
        //* `${boardId}:${users}`
        const [boardId, users] = message.split(':');

        // TODO: 서버가 자꾸 죽어서 임시 주석 처리 했습니다.
        // await dropperGameManager.addGame(boardId, JSON.parse(users));
      } else {
        logger.info(`[Received ${dropConfig.REDIS.CHANNEL2}] ===> ${channel}: ${message}`);

        const game = await dropperGameManager.getGameBySessionId(message);
        console.log(`[dropperChannel - game]`, game);

        for (let user of game.users) {
          console.log(`[dropperChannel - sessionId]`, user.sessionId);
          await redisUtil.createUserLocation(user.sessionId, 'dropper', game.id);
        }

        const buffer = await dropperGameManager.dropMiniGameReadyNoti(game);

        // TODO: 나중에 수정하기
        const seq = '2';

        this._socketMap[seq].socket.write(buffer);
      }
    });
  }

  _onData = (socket) => async (data) => {
    socket.buffer = Buffer.concat([socket.buffer, data]);
    console.log(' [ _onData ]  data ', data);

    while (socket.buffer.length >= config.PACKET.TOTAL_LENGTH) {
      //
      const { messageType, version, sequence, offset, length } = deserialize(socket.buffer);
      console.log(
        `\n messageType : ${messageType}, \n version : ${version}, \n sequence : ${sequence}, \n offset : ${offset}, \n length : ${length}`,
      );

      if (socket.buffer.length >= length) {
        try {
          const packet = socket.buffer.subarray(offset, length);
          socket.buffer = socket.buffer.subarray(length);

          const payload = packetParser(messageType, packet);

          const handler = getHandlerByMessageType(messageType);

          await handler({ socket, payload });

          console.log(' [ Dropper_onData ] payload ====>> ', payload);
        } catch (error) {
          logger.error('[ Dropper: _onData ] ERROR ====>> ', error);
        }
      } else {
        break;
      }
    }
  };
}

export default DropperServer;
