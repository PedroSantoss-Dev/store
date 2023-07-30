import { Link } from 'react-router-dom';
import styled from 'styled-components';

const varHeaderHeight = '5rem';
const firstColor = '#4baef6';
const firstAltColor = '#4baef6';

export const Nav = styled.nav`
  background: linear-gradient(to right, #535bf2, #2c98d6, #2c76d6);
  height: ${varHeaderHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem 0 1rem;
  font-size: 1rem;
  position: static;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const Logo = styled.img`
  height: 3rem;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${varHeaderHeight};
  z-index: 1;
  width: 100%;
  padding: 0 25px;
`;

export const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 0.3rem;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.div`
  height: 5rem;
`;

//This navLinks component is a link from react-scroll lib:
export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-weight: 600;
  height: 100%;
  cursor: pointer;
  /* &.signUp {
    color: ${firstColor};
  } */
  &:hover {
    color: ${firstAltColor};
  }
  &.active {
    border-bottom: 4px solid ${firstColor};
  }
`;
export const NavModal = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-weight: 600;
  height: 100%;
  cursor: pointer;
  /* &.signUp {
    color: ${firstColor};
  } */
  &:hover {
    color: ${firstAltColor};
  }
  &.active {
    border-bottom: 4px solid ${firstColor};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BtnLink = styled(Link)`
  border-radius: 50px;
  background: ${firstColor};
  white-space: nowrap;
  padding: 10px 24px;
  color: #000;
  font-weight: 600;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${firstAltColor};
  }
`;
