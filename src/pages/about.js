import React from 'react';
import about from '../constants/about';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import Title from '../components/Title';
import SocialLinks from '../constants/socialLinks';
import SEO from '../components/SEO';
import Image from 'gatsby-image';

const About = ({ data:{ about:{ nodes } } }) => {
   console.log('nodes',nodes);
  const { title,image,stack, info,skills } = nodes[ 0 ];
  
  return <Layout>
      <SEO title="About" description="about me" />
      <section className="about-page">
        
          <div className="section-center about-center">
              
              <Image fluid={ image.childImageSharp.fluid } className="about-img"></Image>
              
              <article className="about-text">
                  <Title title={ title } />
                  
                  <p>{info}</p>
                  <SocialLinks  />
                  <div className="about-stack">
                      
                      {stack.map((item) => {
                      return <span key={ item.id }>{item.title}</span>;
                    })}
                  </div>
                 
              </article>
          </div>
      </section>
  </Layout>;
};
export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        id
        title
        info
        stack {
          id
          title
        }
        image {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
export default About;
