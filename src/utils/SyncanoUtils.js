import Syncano from 'syncano';
import Dispatcher from '../dispatcher/Dispatcher';
import update from 'react/lib/update';
import {ACTION_TYPES, SYNCANO_KEYS} from '../constants/Constants';

let syncano = new Syncano({apiKey: SYNCANO_KEYS.apiKey, instance: SYNCANO_KEYS.instance});
let messages = syncano.class(SYNCANO_KEYS.className).dataobject();
let msgChannel = syncano.channel(SYNCANO_KEYS.className).watch();


class SyncanoUtils {
  getAllMessages() {
    //add filter for order
    messages.list().then(function(res) {
      Dispatcher.dispatch({
        type: ACTION_TYPES.RECEIVE_ALL_MESSAGES,
        messages: res.objects
      });
    }).catch(function(err) {
      console.log(err);
    });
  }
  createNewMessage(message) {
    message.other_permissions = 'read';
    message.channel = SYNCANO_KEYS.className;
    messages.add(message).then(function(res) {
      Dispatcher.dispatch({
        type: ACTION_TYPES.CREATE_MESSAGE,
        message: res
      });
    });
  }

};

msgChannel.on('create', function(res) {
  Dispatcher.dispatch({
    type: ACTION_TYPES.CREATE_MESSAGE,
    message: res
  });
});

export default new SyncanoUtils();
