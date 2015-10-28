import React from 'react';

export default class ChatBar extends React.Component{
  render() {
    return (
      <div id='chat-bar' className='input-field col s12'>
          <input id='message' type='text' />
          <label for='message'>What did you want to say?</label>
      </div>
    );
  }
};
