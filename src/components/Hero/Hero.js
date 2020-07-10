import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import { StyledHeader } from './HeroStyled';
import * as S from './HeroStyled';

const query = graphql`
{
  file(relativePath: {eq: "hero-me.png"}) {
    childImageSharp {
      fluid {
       ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
const Hero = () => {
  const { file:{
     childImageSharp:{ fluid },
     },
     } = useStaticQuery(query);
  return <StyledHeader>
      <S.HeroCenter className="section-center">
          <S.HeroInfo>
              <div>
                  <S.Underline></S.Underline>
                  <h1>I´m Jonathan</h1>
                  <h4>Front-end Developer</h4>
                  <Link to="/contact" className="btn">
                      contact me
                  </Link>
                
              </div>
          </S.HeroInfo>
          <Image fluid={ fluid } className="hero-img"></Image>

      </S.HeroCenter>
  </StyledHeader>;
};

export default Hero;
