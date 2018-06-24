import React, { Component } from 'react';
import config from '../config';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <a href={config.contact.waiver} className="waiver">
            Waiver for the SI 539 Design of Complex Websites
          </a>
          <span> Ana Maria </span><span> 2017 </span>
          <a href={config.contact.github} className="github">
          </a>
          <a href={config.contact.behanced} className="behanced">
          </a>
          <a href={config.contact.linkedin} className="linkedin">
          </a>
      </div>
    );
  }
}

export default Footer;
