import React from 'react';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

const data = [
  
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: 'https://www.linkedin.com/in/jonathan-nilsson-lahti-a72356110',
  },
  
  {
    id: 2,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: 'https://github.com/joni43',
  },
 
];
const links = data.map(link => {
  return (
      <li key={ link.id }>
          <a href={ link.url } className="social-link">
              {link.icon}
          </a>
      </li>
  );
});

export default ({ styleClass }) => {
  return (
      <ul className={ `social-links ${ styleClass ? styleClass : '' }` }>{links}</ul>
  );
};
