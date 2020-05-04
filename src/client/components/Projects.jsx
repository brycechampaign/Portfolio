import React from 'react';
import Project from './Project';
import KartifyImg from '../static/kartify.png';
import GreenfieldImg from '../static/greenfield-api.png';
import budgetMeImg from '../static/budgetme.png';

const Projects = () => {
  const kartifyDescription =
    'An eCommerce product page frontend. I primarily worked on the reviews component, where I Utilized React to dynamically display submitted product reviews based on selected filter and sorting criterion. I also integrated Jest unit tests with TravisCI for a smoother collaborative Github integration process and I configured React Router for handling navigation between product pages';

  const greenfieldDescription =
    'I Conducted the ETL process to migrate over 25 million product-related entries to an SQL database. I also Optimized API and database to handle web-scale level traffic and Implemented Redis caching to decrease latency of frequently requested endpoints by 50 percent. I deployed the Products Service API on multiple EC2 instances using a Kubernetes cluster to increase throughput significantly.';

  const budgetMeDescription =
    'Budget.Me helps users plan out their monthly budgets by displaying statistics, spending history, their current monthly goal and balance, and more. Users can create a new budget or sign in if they already have one and begin tracking their spending with ease. This application was developed under hackathon-like time constraints and is not finished. I mostly developed it with the goal to improve my CSS/styling skills.';

  return (
    <div id="projects-container">
      <h1>Projects</h1>
      <Project
        title="Kartify"
        description={kartifyDescription}
        githubLink="https://github.com/Kartify-Team/Kartify"
        tags={[
          'Front-End',
          'React',
          'Redux',
          'Express',
          'React Router',
          'Jest',
          'Enzyme',
          'AWS',
          'Node',
        ]}
        imgPath={KartifyImg}
      />
      <Project
        isAlt={true}
        title="Greenfield API"
        description={greenfieldDescription}
        githubLink="https://github.com/Nonchalant-Narwhal/Products-Service"
        tags={[
          'Back-End',
          'Express',
          'PostgreSQL',
          'Docker',
          'Redis',
          'Kubernetes',
          'Mocha',
          'Node',
        ]}
        imgPath={GreenfieldImg}
      />
      <Project
        title="Budget.Me"
        description={budgetMeDescription}
        githubLink="https://github.com/brycechampaign/Budget.me"
        tags={['Full-Stack', 'React', 'Express', 'MongoDB', 'Heroku', 'Node']}
        imgPath={budgetMeImg}
        liveLink="https://budget-dot-me.herokuapp.com/"
      />
    </div>
  );
};

export default Projects;
