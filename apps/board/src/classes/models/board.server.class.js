import { TcpServer } from '@repo/common/classes';
import { config } from '@repo/common/config';
import { getHandlerByMessageType, getPayloadNameByMessageType } from '../../handlers/index.js';
import { deserialize, packetParser } from '@repo/common/utils';

/**
 * 보드게임 서버
 *
 */
class BoardServer extends TcpServer {
  // * _onData() Overriding
  _onData = (socket) => async (data) => {
    //
    socket.buffer = Buffer.concat([socket.buffer, data]);
    console.log(' [ BoardServer _onData ]  data ', data);

    while (socket.buffer.length >= config.PACKET.TOTAL_LENGTH) {
      //
      const { messageType, version, sequence, offset, length } = deserialize(socket.buffer);
      console.log(
        `==>>>\nmessageType : ${messageType}, \n version : ${version}, \n sequence : ${sequence}, \n offset : ${offset}, \n length : ${length}`,
      );

      if (socket.buffer.length >= length) {
        const packet = socket.buffer.subarray(offset, length);
        socket.buffer = socket.buffer.subarray(length);

        const payload = packetParser(messageType, packet, getPayloadNameByMessageType(messageType));

        console.log(' [ onData ] payload ===>> ', payload);

        const handler = getHandlerByMessageType(messageType);

        await handler({ socket, payload });

        console.log(' [ BoardServer _onData ] payload ====>> ', payload);
      } else {
        break;
      }
    }
  };
}

export default BoardServer;