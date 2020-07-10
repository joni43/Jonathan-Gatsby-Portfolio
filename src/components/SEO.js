import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    site {
      siteMetadata {
        siteDesc: description
        siteUrl
        siteTitle: title
      }
    }
  }
`;

const SEO = ({ title,description }) => {
  const { site } = useStaticQuery(query);
  console.log('SITE',site.siteMetadata);
  const { siteDesc,siteTitle,siteUrl } = site.siteMetadata;
  return <Helmet htmlAttributes={ { lang:'en' } } title={ `${ title }  | ${ siteTitle }` }>
      <meta name="description" content={ description || siteDesc } />

  </Helmet>;
};

export default SEO;
