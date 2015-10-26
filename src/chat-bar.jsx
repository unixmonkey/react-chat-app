import React from 'react';
import TextField from 'material-ui/lib/text-field';

export default class ChatBar extends React.Component{
  render() {
    return (
      <div id='chat-bar'>
        <TextField hintText='What do you want to say?' floatingLabelText='Start Typing Here' fullWidth={true} />
      </div>
    );
  }
};
