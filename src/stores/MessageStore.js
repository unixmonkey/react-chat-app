import Store from './Store.js';
import Dispatcher from '../dispatcher/Dispatcher';
import MessageUtils from '../utils/MessageUtils';
import {ACTION_TYPES, CHANGE_EVENT} from '../constants/Constants';

let _messages = {};

let _receiveMessages = function(messages) {
  for (let i = 0; i < messages.length; i++) {
    _messages[messages[i].message_id] = MessageUtils.formatMessage(messages[i]);
  }
}

class MessageStore extends Store {

  constructor() {
    super();
  }

  getAll() {
    return _messages;
  }

}

let MessageStoreInstance = new MessageStore();

MessageStoreInstance.dispatchToken = Dispatcher.register(action => {

  switch (action.type) {
    case ACTION_TYPES.CREATE_MESSAGE:
      _messages[action.message.message_id] = MessageUtils.formatMessage(action.message);
      break;
    case ACTION_TYPES.RECEIVE_ALL_MESSAGES:
      _receiveMessages(action.messages)
      break;
    default:
      return;
  }
  MessageStoreInstance.emitChange();
});

export default MessageStoreInstance;
