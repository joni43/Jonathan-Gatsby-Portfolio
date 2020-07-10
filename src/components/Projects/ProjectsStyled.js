import styled from 'styled-components';

/*
=============== 
Projects Component
===============
*/

export const Section = styled.section`
background: var(--clr-grey-10);
padding: 5rem 0;
background: var(--clr-grey-10);
`;

export const SectionCenter = styled.div`
width: 90vw;
margin: 0 auto;
max-width: 1170px;
@media screen and (min-width: 992px) {
 
    width: 95vw;
  }
`;

/*
=============== 
Project Component
===============
*/

export const Article = styled.article`
display: grid;
margin-bottom: 4rem;

:nth-of-type(even) .project-img {
    grid-column: 5 / -1;
    grid-row: 1 / 1;
  }

  :nth-of-type(even) .project-info {
    grid-column: 2 / span 7;
    grid-row: 1 / 1;
    text-align: left;
  }
  
@media screen and (min-width: 992px) {
   
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
    
`;
export const ProjectInfo = styled.div`
background: var(--clr-white);
  padding: 1rem 2rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  
  h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
  @media screen and (min-width: 992px) {
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);

    z-index: 1;
    grid-column: 5 /12;
    grid-row: 1 / 1;
  }
`;

export const Span = styled.span`
display: inline-block;
  font-size: 1.25rem;
  color: var(--clr-primary-5);
  margin-bottom: 0.75rem;
`;

export const P = styled.p`
word-spacing: 15px;
  color: var(--clr-grey-3);
`;
export const ProjectStack = styled.div`
margin-bottom: 1rem;

span {
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
}
`;