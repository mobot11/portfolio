import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';

const GlobalHead = props => (
  <div>
    <Head>
      <title lang="en">
        {props.pageName ? props.pageName : ''} | Dylan Moberg
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Dylan Moberg's portfolio website" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>
  </div>
);

GlobalHead.propTypes = {
  pageName: PropTypes.string,
};

export default GlobalHead;
