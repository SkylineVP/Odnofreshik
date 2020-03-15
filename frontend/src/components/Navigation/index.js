import React       from 'react';
import { NavLink } from 'react-router-dom';

const navLinkActiveStyle = {
  color:'#28D2D0',
};

const Navigation = props => {
  return (
    <nav>
      <ul>
        <li><NavLink exact activeStyle={navLinkActiveStyle} to="/">Home</NavLink></li>
        <li><NavLink activeStyle={navLinkActiveStyle} to="/login">Sign In</NavLink></li>
        <li><NavLink activeStyle={navLinkActiveStyle} to="/signup">Sign Up</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;