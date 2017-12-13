import React from 'react';
import projectStyles from '../sass/projects.scss';
import Helmet from 'react-helmet';
import Menu from './Menu';
import Header from './Header';
import ProjectImage from './ProjectImage';

const Listage = () => {
  return (
    <div className={projectStyles.container}>
      <ProjectImage imgClass="myhood" />
      <div className={projectStyles.description}>
        <h2>myNeighborhood</h2>
        <p>
          This project aggregates data about Seattle neighborhood in an interactive way and displays graphs based on user interaction.
        </p>
        <p>
          url: <a href="https://myneighborhood.herokuapp.com">myneighborhood.herokuapp.com</a>
        </p>
        <p>
          Technologies used:
          <ul>
            <li>React</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>SASS</li>
            <li>D3.js</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

const ReactWeather = () => {
  return (
    <div className={projectStyles.container}>
      <ProjectImage imgClass="react_weather" />
      <div className={projectStyles.description}>
        <h2>React Weekly Weather</h2>
        <p>
          A fully functional weather application that displays a 5 day forecast for anywhere in the world.
        </p>
        <p>
          url: <a href="https://react-weekly-weather.herokuapp.com/">react-weekly-weather.herokuapp.com</a>
        </p>
        <p>
          Technologies used:
          <ul>
            <li>React</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>SASS</li>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Enzyme</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
        </p>
      </div>
    </div>
  );
}

const YoutubeSearch = () => {
  return (
    <div className={projectStyles.container}>
      <ProjectImage imgClass="youtube" />
      <div className={projectStyles.description}>
        <h2>Simple YouTube Search</h2>
        <p>
        Simple Youtube Search is a dynamic two-way data binded YouTube search clone built with React.
        </p>
        <p>
          Technologies used:
          <ul>
            <li>React</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>YouTube API</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <div className={ projectStyles.component }>
      <Helmet 
        title="Projects"
      />
      <Header pageTitle='Here are some of my recent projects, with plenty more on the way' />
     <Listage />
     <ReactWeather />
     <YoutubeSearch />
    </div>
  );
}


export default Projects;