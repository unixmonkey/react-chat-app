import React from 'react';
import MessageActions from '../actions/MessageActions.js';
import {ENTER_KEY_CODE} from '../constants/Constants';


export default class ChatBar extends React.Component{
  constructor() {
    super();
    this.state = {
      text: ''
    };

    this._onChange = this._onChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);

  }

  _onChange(event, value) {
    this.setState({text: event.target.value});
  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var text = this.state.text.trim();
      if (text) {
        MessageActions.createMessage(text);
      }
      this.setState({text: ''});
    }
  }

  render() {
    return (
      <div id='chat-bar' className='input-field col s12'>
          <input
            id='message'
            type='text'
            value={this.state.text}
            onChange={this._onChange}
            onKeyDown={this._onKeyDown}
            autoComplete='off'
          />
          <label htmlFor='message'>What did you want to say?</label>
      </div>
    );
  }
};
