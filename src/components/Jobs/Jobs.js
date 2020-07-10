import React,{ useState } from 'react';

import Title from '../Title';
import { FaAngleDoubleRight, FaAlignRight } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import * as S from './JobsStyled';
const query = graphql`
  {
    allStrapiJobs {
      nodes {
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`;
const Jobs = () => {
  const data = useStaticQuery(query);
  const { allStrapiJobs:{ nodes:jobs } } = data;
  const [ value,setValue ] = useState(0);
  const { company,position,date,desc } = jobs[ 0 ];
  return <S.Section>
      <Title title="experience"/>
      <S.JobsCenter>
          <S.ButtonContainer>
              {jobs.map((item,index) => {
                    
                return <button 
                className={ `job-btn ${ index===value && 'active-btn' }` } 
                onClick={ ()=>setValue(index) } 
                key={ index }>{item.company}
                </button>;
              })}
          </S.ButtonContainer>
          <article className="job-info">
              <h3>{position}</h3>
              <h4>{company}</h4>
              <p className="job-date">{date}</p>
              {
                desc.map((item) => {
                return <S.JobDescription key={ item.id } >
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p>{item.name}</p>
                </S.JobDescription>;
                })
              }
          </article>
      </S.JobsCenter>
      <Link to="/about" className="btn center-btn">
          more info
      </Link>
  </S.Section>;
};

export default Jobs;
