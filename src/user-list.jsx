import React from 'react';
import Paper from 'material-ui/lib/paper';

export default class UserList extends React.Component{
  render() {
    return (
      <Paper zDepth={1} id='userlist'>
        <User />
        <User />
        <User />
      </Paper>
    );
  }
};

class User extends React.Component{
  render() {
    return (
      <h3>User Name</h3>
    )
  }
}
