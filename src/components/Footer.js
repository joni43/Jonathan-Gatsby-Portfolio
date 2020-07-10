import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../constants/socialLinks';
const Footer = () => {
  return <StyledFooter>
      <div>
          <SocialLinks styleClass="footer-links"></SocialLinks>
          <h4>copyright&copy;{new Date().getFullYear()}</h4>
          <span>jonathan.v.nilsson@gmail.com</span>
      </div>
  </StyledFooter>;
};

/*
===============
Footer Styled
===============
*/ 
const StyledFooter = styled.footer`
height: 9rem;
background: #222;
text-align: center;
display: grid;
place-items: center;

h4 {
  margin-top: 0.5rem;
  color: var(--clr-white);
  font-weight: normal;
  text-transform: uppercase;
}

span {
  color: var(--clr-primary-5);
}
.social-link {
  color: var(--clr-white);
}
.social-link:hover {
  color: var(--clr-primary-5);
}
`;

export default Footer;
