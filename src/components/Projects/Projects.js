import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Title from '../Title';
import Project from './Project';
import * as S from './ProjectsStyled';

const Projects = ({ projects, title, showLink }) => {
console.log('bajsnödig',projects);
  return <S.Section>
      <Title title={ title } />
      <S.SectionCenter>
          {projects.map((project, index) => {
        return <Project key={ project.id } index={ index } { ...project } />;
      })}
      </S.SectionCenter>
      {
      showLink && <Link to="/projects" className="btn center-btn">projects</Link>
    }
  </S.Section>;
};

Projects.propTypes = {
  projects: PropTypes.array,
  title: PropTypes.string.isRequired,
  showLink: PropTypes.boolean,
};

export default Projects;
