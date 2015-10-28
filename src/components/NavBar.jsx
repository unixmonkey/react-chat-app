import React from 'react';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar-fixed'>
        <nav>
          <div className='nav-wrapper'>
            <a className='brand-logo'>React Chat App</a>
          </div>
        </nav>
      </div>
    )
  }
};
