import {MESSAGE_FORMAT} from '../constants/Constants';
import update from 'react/lib/update';

class MessageUtils {
  formatMessage(message) {
    var fm = update({}, {$merge: MESSAGE_FORMAT});
    var keys = Object.keys(fm);
    keys.map(function(k) {
      return fm[k] = message[k] || MESSAGE_FORMAT[k];
    });

    return fm;
  }
  buildNew(text) {
    let message = {};
    message.message_id = 'm_' + Date.now();
    message.message_text = text;
    return message;
  }
};


export default new MessageUtils();
