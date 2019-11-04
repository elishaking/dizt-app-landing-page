import React, { Component } from 'react';
import GooglePlayIcon from './GooglePlayIcon';

export default class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <header>
          <nav>
            <h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="46.908" height="46.908" viewBox="0 0 46.908 46.908">
                <g id="logo" transform="translate(-161.5 -161.5)">
                  <path id="Path_3" data-name="Path 3" d="M192.337,174.665c-5.683,6.618-15.714,8.769-19.777,19.631a56.308,56.308,0,0,0-3.21,14.111h-5.529a2.328,2.328,0,0,1-2.321-2.321V163.821a2.328,2.328,0,0,1,2.321-2.321h31.1A13.326,13.326,0,0,1,192.337,174.665Z" fill="#347fa2" />
                  <path id="Path_4" data-name="Path 4" d="M608.453,163.821v42.265a2.328,2.328,0,0,1-2.321,2.321H594.494c-2.121-4.989-4.216-11.806-2.583-17.057,2.844-9.147,9.081-15.578,8.953-20.885-.1-4.005-2.687-7.579-3.852-8.965h9.12A2.328,2.328,0,0,1,608.453,163.821Z" transform="translate(-400.045)" fill="#62c5f2" />
                </g>
              </svg>

              Dizt
            </h1>

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#screenshots">Screenshots</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </nav>
        </header>

        <div className="content">
          <div className="left">
            <h1>Know the distance and time to your destination</h1>

            <p>Dizt is a simple and intuitive mobile app that enables you to determine the road distance between two locations and the exact travel time using your car, the bus, your bicycle or by walking. You also get to see the transport fare if you are using a bus along some routes</p>

            <div id="g-play">
              <a href="https://play.google.com/store/apps/details?id=com.king.apps.dizt" rel="noopener noreferrer" target="_blank">
                <GooglePlayIcon />
              </a>
            </div>

            <div>
              <a href="https://facebook.com/skyblazar" rel="noopener noreferrer" target="_blank">
                <svg id="Group_63" data-name="Group 63" xmlns="http://www.w3.org/2000/svg" width="45.026" height="45.026" viewBox="0 0 45.026 45.026">
                  <g id="facebook" transform="translate(16.279 10.391)">
                    <path id="f_1_" d="M45.462,24.245V13.186h3.71l.557-4.311H45.462V6.124c0-1.248.345-2.1,2.136-2.1H49.88V.169A30.927,30.927,0,0,0,46.555,0c-3.291,0-5.544,2.009-5.544,5.7V8.875H37.29v4.311h3.722V24.245Z" transform="translate(-37.29)" fill="#005e8d" />
                  </g>
                  <g id="Ellipse_38" data-name="Ellipse 38" transform="translate(0 0)" fill="none" stroke="#005e8d" stroke-width="3">
                    <circle cx="22.513" cy="22.513" r="22.513" stroke="none" />
                    <circle cx="22.513" cy="22.513" r="21.013" fill="none" />
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="right">
            <div>
              <img src="img/phone.png" alt="Phone" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
