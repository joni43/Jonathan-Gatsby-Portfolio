import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import services from '../../constants/services';
const Services = () => {
  return <Section>
      <Title title="about" />
      <AboutContent>
          {services.map((service) => {
            const { id,icon,title,text } = service;

            return <ServiceArticle key={ id } >
                {icon}
                <h4>{title}</h4>
                <Underline></Underline>
                <p>{text}</p>
            </ServiceArticle>; 
          })}
      </AboutContent>
  </Section>;
};
export const Section = styled.section`
background: var(--clr-grey-10);
padding: 5rem 0;
`;

export const AboutContent = styled.div`
width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

    @media screen and (min-width: 676px) {

        display: grid;
        grid-template-columns: 1fr 1fr;
        -webkit-column-gap: 2rem;
        -moz-column-gap: 2rem;
        column-gap: 2rem;
      }
      @media screen and (min-width: 992px) {

        width: 95vw;
        grid-template-columns: 1fr 1fr 1fr;
      }
`;

export const ServiceArticle = styled.article`
background: var(--clr-white);
padding: 3rem 1.5rem;
margin-bottom: 2rem;
border-radius: var(--radius);
text-align: center;
-webkit-transition: var(--transition);
transition: var(--transition);
:hover {
  background: var(--clr-primary-5);
  color: var(--clr-primary-9);
}
p {
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
:hover p {
  color: var(--clr-primary-9);
}

`;

export const Underline = styled.div`

height: 0.25rem;
margin-bottom: 1.25rem;
background: var(--clr-primary-5);
margin-left: auto;
margin-right: auto;
width: 3rem;
  height: 0.12rem;
  -webkit-transition: var(--transition);
  transition: var(--transition);
`;
export default Services;
