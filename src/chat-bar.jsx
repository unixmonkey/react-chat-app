import React from 'react';

export default class ChatBar extends React.Component{
  render() {
    return (
      <div id='chat-bar'>
        <span hintText='What do you want to say?' floatingLabelText='Start Typing Here' fullWidth={true} />
      </div>
    );
  }
};
