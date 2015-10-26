import React from 'react';
import ReactDOM from 'react-dom';
import mui from 'material-ui';

import AppBar from 'material-ui/lib/app-bar';

import UserList from './user-list.jsx';
import ChatWindow from './chat-window.jsx';
import ChatBar from './chat-bar.jsx';


var App = React.createClass({
  render() {
    return (
      <div className='grid'>
        <AppBar showMenuIconButton={false} title='React Chat App' />
        <div className='col-1-5'>
          <UserList />
        </div>
        <div className='col-4-5'>
          <div id='chat-wrapper'>
            <ChatWindow />
            <ChatBar />
          </div>
        </div>
      </div>

    );
  }
});

ReactDOM.render(<App />, document.getElementById('chat'));
