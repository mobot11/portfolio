import React from 'react';
import Header from './Header';
import ProjectImage from './ProjectImage';

const Listage = () => {
  return (
    <div className="container">
      <ProjectImage imgUrl="/static/images/myhood.png" />
      <div className="description">
        <h2>myNeighborhood</h2>
        <p>
          This project aggregates data about Seattle neighborhood in an
          interactive way and displays graphs based on user interaction.
        </p>
        <p>
          url:{' '}
          <a href="https://myneighborhood.herokuapp.com">
            myneighborhood.herokuapp.com
          </a>
        </p>
        <p>Technologies used:</p>
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
      </div>
    </div>
  );
};

const ReactWeather = () => {
  return (
    <div className="container">
      <ProjectImage imgUrl="/static/images/react-weekly-weather.png" />
      <div className='description'>
        <h2>React Weekly Weather</h2>
        <p>
          A fully functional weather application that displays a 5 day forecast
          for anywhere in the world.
        </p>
        <p>
          url:{' '}
          <a href="https://react-weekly-weather.herokuapp.com/">
            react-weekly-weather.herokuapp.com
          </a>
        </p>
        <p>Technologies used:</p>
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
      </div>
    </div>
  );
};

const YoutubeSearch = () => {
  return (
    <div className='container'>
      <ProjectImage imgUrl="/static/images/youtube-search.png" />
      <div className='description'>
        <h2>Simple YouTube Search</h2>
        <p>
          Simple Youtube Search is a dynamic two-way data binded YouTube search
          clone built with React.
        </p>
        <p>Technologies used:</p>
        <ul>
          <li>React</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>YouTube API</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <div className='component'>
        <Header pageTitle="Here are some of my recent personal projects, with plenty more on the way" />
        <Listage />
        <ReactWeather />
        <YoutubeSearch />
      </div>
      <style global jsx>{`
      .image {
        width: 100%;
        padding: 0 0 45% 0;
        background-size: 100% auto;
      }
      
      .container {
        max-width: 800px;
        margin: 0 auto;
      }
      
      .description {
        padding: 20px;
      }

      .description h2, .description p {
        opacity: .8;
      }
      
      .description a {
        color: #197993;
      }
      
      .description a:hover {
        text-decoration: underline;
      }
    `}</style>
    </div>
  );
};

export default Projects;
