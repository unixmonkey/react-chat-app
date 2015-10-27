import React from 'react';

export default class ChatWindow extends React.Component{
  render() {
    return (
      <div zDepth={1} className='window' id='chat-window'>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
    );
  }
};

class ChatMessage extends React.Component{
  render() {
    return (
      <div className='message-wrapper'>
        <h2>User Name<small className='timestamp'>12:00 PM</small></h2>
        <p>Plunger pot crema trifecta, single origin, crema coffee irish mocha instant.
          Acerbic blue mountain eu, dripper cup,whipped blue mountain coffee froth
        </p>
      </div>
    );
  }
};
