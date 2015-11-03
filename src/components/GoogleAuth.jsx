import React from 'react';



export default class GoogleAuth extends React.Component{
  login() {
  }
  render() {
    return (
      <a className='waves-effect waves-light btn-large gAuth' onClick={this.login}>Google Login</a>
    )
  }
}
