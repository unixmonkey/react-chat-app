import React from 'react';

export default class ChatMessage extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    var message = this.props.message;
    message.created_at = (message.created_at == 'created_at') ? <i>Posting...</i> : message.created_at
    return (
      <div className='message-wrapper'>
        <i className='material-icons left avatar circle'>person</i>
        <span>User Name<small className='timestamp'>{message.created_at}</small></span>
        <p>{message.message_text}</p>
      </div>
    );
  }

};
