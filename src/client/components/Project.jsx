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
  altText,
  liveLink = null,
}) => {
  return (
    <div className={(isAlt ? 'project-alt' : '') + ' project'}>
      <div className="project-image">
        <img src={imgPath} className="project-thumbnail box-shadow" alt={altText} />
      </div>
      <div className="title-description">
        <div className="project-head">
          <h2>{title}</h2>
          <div className="project-icon-group">
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
          </div>
        </div>
        <p>{description}</p>
        <div className="skills-container">
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
