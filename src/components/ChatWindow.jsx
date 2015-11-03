import React from 'react';
import MessageStore from '../stores/MessageStore';
import SyncanoUtils from '../utils/SyncanoUtils';
import ChatMessage from './ChatMessage.jsx';

const getChatMessages = (messages) => {
  let keys = Object.keys(messages);
  let ChatMessages = keys.map(function(k) {
    return (
      <ChatMessage
        key={messages[k].message_id}
        message={messages[k]}
      />
    )
  });
  return ChatMessages;
}

export default class ChatWindow extends React.Component{
  constructor() {
    super();
    this.state = {
      messages: MessageStore.getAll()
    };

    this._onChange = this._onChange.bind(this);
    this._scrollToBottom = this._scrollToBottom.bind(this);

  }
  componentWillMount() {
    SyncanoUtils.getAllMessages();
  }
  componentDidMount() {
    this._scrollToBottom();
    MessageStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    MessageStore.removeChangeListener(this._onChange);
  }

  componentDidUpdate() {
    this._scrollToBottom();
  }

  _scrollToBottom() {
    let mw = this.refs.messageWindow;
    mw.scrollTop = mw.scrollHeight;
  }

  _onChange() {
    this.setState({messages: MessageStore.getAll()});
  }



  render() {
    var ChatMessages = getChatMessages(this.state.messages);
    return (
      <div className='window' id='chat-window' ref='messageWindow'>
        <div className='welcome-message'>
          <h2>Welcome to our chat room!</h2>
          <p>This is the start of the conversation. Thanks for joining!</p>
          <hr />
        </div>
        <div className='message-list'>
          {ChatMessages}
        </div>
      </div>
    );
  }
};
