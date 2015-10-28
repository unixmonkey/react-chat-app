import React from 'react';

const authKeys = {
  clientId: '',
  apiKey: '',
  scopes: ''
};

export default class GoogleAuth extends React.Component{
  render() {
    return (
      <a className='waves-effect waves-light btn-large gAuth' onClick={this.login}>Google Login</a>
    )
  }
}
