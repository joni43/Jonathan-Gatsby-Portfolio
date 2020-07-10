import styled from 'styled-components';

export const StyledNavbar = styled.nav`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 5rem;
display: flex;
align-items: center;
z-index: 200;
background: var(--clr-white);

@media screen and (min-width: 992px) {

      background: transparent;
    
  }
`;

export const NavCenter = styled.div`
width: 90vw;
max-width: 1170px;
margin: 0 auto;

@media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
}
`;

export const NavHeader = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-bottom: 0.375rem;
    
  }
`;

export const StyledButton = styled.button`
font-size: 2rem;
background: transparent;
border-color: transparent;
color: var(--clr-primary-5);
cursor: pointer;
transition: var(--transition);

hover {
    color: var(--clr-primary-2);
}

@media screen and (min-width: 768px) {
    
      display: none;
    
`;