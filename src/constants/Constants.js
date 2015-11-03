import keyMirror from 'keyMirror';

export const CHANGE_EVENT = 'CHANGE';

export const ENTER_KEY_CODE = 13;

export const ACTION_TYPES = keyMirror({
  CREATE_MESSAGE: null,
  INCOMING_MESSAGE: null,
  MESSAGE_POSTED: null,
  RECEIVE_ALL_MESSAGES: null,
  LOG_IN: null,
  LOG_OUT: null
});

export const MESSAGE_FORMAT = keyMirror({
  message_text: null,
  message_id: null,
  created_at: null,
  user_profile_id: null
});

export const GOOGLE_KEYS = {
  clientId: '',
  apiKey: '',
  scopes: ''
};

export const SYNCANO_KEYS = {
  instance: 'react-chat-app',
  apiKey: '4f77c238a152a7e875d1f9944dcb267baf3581bd',
  className: 'messages'
};
