import React from 'react';

const Header = (props) => {
    return (
      <header className='header'>
        <h4 className='header__title'>This is short app with news filtering</h4>
        <input type='text' name='input_text' className='header__input' onChange={props.keywords} placeholder='Please enter a keyword'></input>
      </header>
    )
}

export default Header;