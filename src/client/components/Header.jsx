import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import resume from '../static/Resume.pdf';

const Header = () => {
  return (
    <div id="header-container">
      <a href={resume} target="_blank">
        <button id="resume-button">
          Resume <FontAwesomeIcon icon={faFilePdf} id="resume-button-icon" />
        </button>
      </a>
      <h1 id="name">Bryce Champaign</h1>
      <p>
        I am a full-stack software engineer. I am well versed in{' '}
        <strong>JavaScript</strong>, <strong>React</strong>,{' '}
        <strong>Node.js</strong>, and <strong>SQL/NoSQL</strong> databases. I am
        passionate about building beautiful, intuitive frontends and scalable,
        efficient backends.
      </p>
      <div id="header-icons">
        <a href="https://github.com/brycechampaign" target="_blank">
          <FontAwesomeIcon
            icon={faGithubSquare}
            size="2x"
            className="header-icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/bryce-champaign" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="header-icon"
          />
        </a>
        <a href="mailto:brycechampaign@gmail.com" target="_blank">
          <FontAwesomeIcon
            icon={faEnvelopeSquare}
            size="2x"
            className="header-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
