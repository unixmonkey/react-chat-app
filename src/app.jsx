import React from 'react';
import ReactDOM from 'react-dom';
import Materialize from 'materialize-js';

//Components
import NavBar from './components/nav-bar.jsx';
import UserList from './components/user-list.jsx';
import ChatWindow from './components/chat-window.jsx';
import ChatBar from './components/chat-bar.jsx';


class App extends React.Component {
  render() {
    return (
      <div className='row' id='chat'>
        <NavBar />
        <div className='col s2 height-100 z-depth-2'>
          <UserList />
        </div>
        <div className='col s10 height-100'>
          <ChatWindow />
          <ChatBar />
        </div>
      </div>

    );
  }
};


ReactDOM.render(<App />, document.getElementById('chat-wrapper'));
