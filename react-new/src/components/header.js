import react from 'react';
import styled from 'styled-components';
import styless from './css/header.module.css';
import { NavLink } from 'react-router-dom';

// let styless ={
//   'menu ul': 'header_menu__3xZFN ul',
// }

const HeaderMain = styled.header`
    background: darkturquoise;
    padding: 20px 0;
`;
const NavMenu = styled.nav`
ul{
  display: flex;
  list-style: none;
}
ul li a{
  padding-right: 10px;
  font-size: 14px;
  color: black;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
}
ul li a:hover{
  text-decoration: underline;
}
`;
const Header = () => {
  return (
    <HeaderMain>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <NavMenu>
              <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><a href="#">Photo</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </NavMenu>
          </div>
        </div>
      </div>
    </HeaderMain>
  );
}
export default Header;