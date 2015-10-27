import React from 'react';

export default class UserList extends React.Component{
  render() {
    return (
      <div zDepth={1} id='userlist'>
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
      <h3>User Name</h3>
    )
  }
};

class GoogleAuth extends React.Component{
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
  componentDidMount() {
    console.log('component has mounted');
  }

  login() {
    console.log(gapi);
  }
  onSignIn(google_user) {
    var profile = googleUser.getBasicProfile();
    console.log(profile);
  }

  render() {
    return (
      <button label='Log In With Google' onClick={this.login} secondary={true} />
    )
  }
}
