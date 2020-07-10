import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Projects from '../components/Projects/Projects';
import SEO from '../components/SEO';

const ProjectsPage = ({
  data: { 
    allStrapiProjects:{ nodes:projects },
   },
}) => {
  return <Layout>
      <SEO title="Projects" description="My Projects" />

      <section className="projects-page">
          <Projects projects={ projects } title="all projects" />
      </section>
  </Layout>;
};
export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        url
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

export default ProjectsPage;
