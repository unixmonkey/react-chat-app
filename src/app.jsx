import React from 'react';
import ReactDOM from 'react-dom';


import UserList from './user-list.jsx';
import ChatWindow from './chat-window.jsx';
import ChatBar from './chat-bar.jsx';


class App extends React.Component {
  render() {
    return (
      <div className='row'>
        <NavBar title='React Chat App' />
        <div className='col s3'>
          <UserList />
        </div>
        <div className='col s8'>
          <ChatWindow />
          <ChatBar />
        </div>
      </div>

    );
  }
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a className='brand-logo'>{this.props.title}</a>
        </div>
      </nav>
    )
  }
};


ReactDOM.render(<App />, document.getElementById('chat'));
