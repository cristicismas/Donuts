import React, {Component, Fragment} from 'react';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>donut</h1>
        <Notifications />
      </header>
    )
  }
}

function Notifications() {
  return (
    <div className="notifications">
      <img src="/images/bell-icon.png" />
    </div>
  )
}

export default Header;