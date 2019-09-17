import React, { Component } from 'react';

class Header extends Component {
  state = {
    active: 'active',
    keywords: ''
  }

  inputHandle = (event) => {
    const value = event.target.value ==='' ? 'active' : 'non-active';
    this.setState({
      active: value,
      keywords: event.target.value
    });
  }
  render() {
    const style = {
      padding: '50px 0 50px 30px',
      background: 'red'
    }

    if (this.state.keywords !== '') {
      style.background = 'blue'
    } else {
      style.background = 'red'
    }

    return (
      <header className={this.state.active}>
        <input type='text' name='input_text' onChange={this.inputHandle}></input>
      </header>
    )
  }
}

export default Header;