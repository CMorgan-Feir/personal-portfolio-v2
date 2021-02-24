import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import FooterStyles from '../../styles/footer.module.css';

export const Footer = () => (
  <div className={FooterStyles.container}>
    <h2>Get in touch</h2>
    <div className={FooterStyles['social-icon-container']}>
      <a href="mailto:morganfeir@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://github.com/CMorgan-Feir" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/morgan-feir/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  </div>
);
