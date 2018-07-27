import Link from 'next/link';
import $ from 'jquery';

import React, { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }

  componentDidUpdate() {
    if (!this.state.hidden) {
      $('.menu')
        .find('.social_link')
        .addClass('test')
        .fadeIn('slow');
    }
  }

  componentDidMount() {
    this.$social = $(this.social);
    $(this.$social).on('click', () => {
      $('.social_item').toggle('slide');
    });
  }

  render() {
    return (
      <div className="nav-container">
        <div className="nav-menu">
          <nav>
            <ul className="menu">
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/projects'>
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href='/blog'>
                  <a>Blog</a>
                </Link>
              </li>
              <li
                className='social hidden'
                ref={social => {
                  this.social = social;
                }}
              >
                Social
              </li>
              <li className="social_item" style={{ display: 'none' }}>
                <a href="https://www.linkedin.com/in/dylanmoberg">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
              <li className="social_item" style={{ display: 'none' }}>
                <a href="https://www.github.com/mobot11">
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </li>
              <li className="social_item" style={{ display: 'none' }}>
                <a href="https://www.twitter.com/mobot11">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li className="social_item" style={{ display: 'none' }}>
                <a href="mailto:dylanmoberg11@gmail.com">
                  <i className="fa fa-envelope-open" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
          <div style={{clear: 'both'}} />
        </div>
        <style jsx>{`
        .nav-menu {
          padding: 40px 0;
          float: right;
        }
        .menu li {
          list-style: none;
          display: inline-block;
          padding: 0 0 0 20px;
          overflow: hidden;
        }
        .menu li:hover {
          text-decoration: underline;
        }
        .menu li a {
          color: #090a0f;
          text-decoration: none;
          opacity: 0.8;
        }
        .nav-menu .social {
          cursor: pointer;
          color: #090a0f;
        }
        @media only screen and (max-width: 800px) {
          .nav-menu .social {
            display: none !important;
          }
        }
      `}</style>
      </div>
    );
  }
}

export default Menu;
