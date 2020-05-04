import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

const Project = ({
  isAlt = false,
  title,
  description,
  githubLink,
  imgPath,
  tags,
  liveLink = null,
}) => {
  return (
    <div className={(isAlt ? 'project-alt' : '') + ' project'}>
      <div className="project-image">
        <img src={imgPath} className="project-thumbnail" />
      </div>
      <div className="title-description">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={githubLink} target="_blank">
          <FontAwesomeIcon icon={faGithubSquare} size="2x" />
        </a>
        {liveLink ? (
          <a href={liveLink} target="_blank">
            <FontAwesomeIcon
              icon={faExternalLinkSquareAlt}
              size="2x"
              className="icon-margin-left"
            />
          </a>
        ) : null}
        <div className="skills-container">
          <h3 className="skills-heading">Skills</h3>
          <div className="skills-row">
            {tags.map((tag) => (
              <div className="skill" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
