import initMatrix from '@src/client/initMatrix';
import EventEmitter from 'events';
import { objType } from '../tools';

// Emitter
class AttemptDecryption extends EventEmitter {
  constructor() {
    super();
  }

  start() {
    this.emit('start', true);
  }

  exec(mEvent, ops = undefined, ignoreError = false) {
    return new Promise(async (resolve, reject) => {
      try {
        let result;
        if (!objType(ops, 'object'))
          result = await mEvent.attemptDecryption(initMatrix.matrixClient.getCrypto());
        else result = await mEvent.attemptDecryption(initMatrix.matrixClient.getCrypto(), ops);

        resolve(result);
      } catch (err) {
        if (!ignoreError) reject(err);
        else console.error(err);
      }
    });
  }
}

const attemptDecryption = new AttemptDecryption();
attemptDecryption.setMaxListeners(Infinity);
export default attemptDecryption;
