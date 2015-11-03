import Dispatcher from '../dispatcher/Dispatcher';
import MessageUtils from '../utils/MessageUtils';
import SyncanoUtils from '../utils/SyncanoUtils';
import {ACTION_TYPES} from '../constants/Constants';

export default {
  createMessage(text) {
    let message = MessageUtils.buildNew(text)
    Dispatcher.dispatch({
      type: ACTION_TYPES.CREATE_MESSAGE,
      message: message
    });
    SyncanoUtils.createNewMessage(message);
  }
}
