import React from 'react';

export default class ChatWindow extends React.Component{
  render() {
    return (
      <div className='window' id='chat-window'>
        <div className='welcome-message'>
          <h2>Welcome to our chat room!</h2>
          <p>This is the start of the conversation. Thanks for joining!</p>
          <hr />
        </div>
        <ChatMessage />
      </div>
    );
  }
};


class ChatMessage extends React.Component{
  render() {
    return (
      <div className='message-wrapper'>
        <i className='material-icons left avatar circle'>person</i>
        <span>User Name<small className='timestamp'>12:00 PM</small></span>
        <p>
          Plunger pot crema trifecta, single origin, crema coffee irish mocha instant.
          Acerbic blue mountain eu, dripper cup,whipped blue mountain coffee froth
        </p>
      </div>
    );
  }
};
