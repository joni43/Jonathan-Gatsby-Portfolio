import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavbar,NavCenter,NavHeader,StyledButton } from './NavbarStyles';
import { FaRegSmileWink } from  'react-icons/fa';
import { FaAlignRight } from 'react-icons/fa';
import PageLinks from '../../constants/links';
const Navbar = ({ toggleSidebar }) => {
  return <StyledNavbar>
      <NavCenter>
          <NavHeader>
              <FaRegSmileWink />
              <StyledButton type="button"  onClick={ toggleSidebar }>
                  <FaAlignRight></FaAlignRight>
              </StyledButton>
          </NavHeader>
          <PageLinks styleClass="nav-links"></PageLinks>
      </NavCenter>
  </StyledNavbar>;
};

Navbar.propTypes = {
    toggleSidebar:PropTypes.func,
};

export default Navbar;
