import React from 'react';
import GoogleAuth from './GoogleAuth.jsx';

export default class UserList extends React.Component{
  render() {
    return (
      <div id='userlist'>
        <GoogleAuth />
        <User />
        <User />
        <User />
      </div>
    );
  }
};

class User extends React.Component{
  render() {
    return (
      <div className='chip'>
        <i className='material-icons left' >person</i>
        User Name
      </div>
    )
  }
};
