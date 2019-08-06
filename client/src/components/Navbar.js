import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <Link to="/" >
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/about" >
      <Menu.Item>
        About
      </Menu.Item>
    </Link>
    <Link to="/contact" >
      <Menu.Item>
        Contact
      </Menu.Item>
    </Link>
    <Link to="/hobbies" >
      <Menu.Item>
        Hobbies
      </Menu.Item>
    </Link>
    <Link to="/portfolio" >
      <Menu.Item>
        Portfolio
      </Menu.Item>
    </Link>
    <Link to="/skills" >
      <Menu.Item>
        Skills
      </Menu.Item>
    </Link>
  </Menu>
);


export default Navbar;