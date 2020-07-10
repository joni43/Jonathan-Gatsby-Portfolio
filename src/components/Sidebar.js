import React from 'react';
import styled from 'styled-components';
import Links from '../constants/links';
import SocialLinks from '../constants/socialLinks';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen,toggleSidebar }) => {
  return <aside className={ `sidebar ${ isOpen ? 'show-sidebar' :'' }` }>
      <Button onClick={ toggleSidebar }><FaTimes/></Button>
      <div className="side-container">
          <Links styleClass={ `${ isOpen ? 'sidebar-links':'' }` } />
          <SocialLinks styleClass={ `${ isOpen ? 'sidebar-icons':'' }` } />
      </div>
  </aside>;
};

export const Button = styled.button`
position: absolute;
right: 4.75%;
top: 2.75%;
font-size: 2.5rem;
background: transparent;
border-color: transparent;
color: var(--clr-red-dark);
cursor: pointer;
`;

export default Sidebar;
