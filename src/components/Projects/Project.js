import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { FaGithubSquare ,FaExternalLinkAlt } from 'react-icons/fa';

import * as S from './ProjectsStyled';

const Project = ({ description, title, github, stack, url, image, index }) => {

    return <S.Article className="project">
        <Image fluid={ image.childImageSharp.fluid } className="project-img" />
        <S.ProjectInfo className="project-info">
            <S.Span>0{index + 1}.</S.Span>
            <h3>{title}</h3>
            <S.P> {description}</S.P>
            <S.ProjectStack>
                {stack.map((item) => {
                    return <span key={ item.id }>{item.title}</span>;
                })}
            </S.ProjectStack>
            <div className="project-links">
                <a href={ github }>
                    <FaGithubSquare className="project-icon" />
                </a>
                {url == null ? url : 
                <a href={ url }>
                    <FaExternalLinkAlt className="project-icon" />
                </a>
                }
                
            </div>
        </S.ProjectInfo>
    </S.Article>;
};

Project.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    url: PropTypes.string,
    image: PropTypes.object.isRequired,
    stack: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default Project;
