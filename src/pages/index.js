import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Jobs from '../components/Jobs/Jobs';
import Projects from '../components/Projects/Projects';
import SEO from '../components/SEO';
export default ({ data }) => {
  console.log('data',data);
  const { allStrapiProjects:{ nodes:projects } } = data;
  return <Layout>
      <SEO title="Home" description="Homepage" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={ projects } title="featured projects" showLink/ >
  </Layout>;
};

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`;