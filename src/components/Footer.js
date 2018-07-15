import React, { Component } from 'react';
import config from '../config';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <a href={config.contact.waiver} className="waiver">
            Waiver for the SI 539
          </a>
          <span> Ana Maria </span><span> 2017 </span>
          <a href={config.contact.github} className="github">
            github link
          </a>
          <a href={config.contact.behanced} className="behanced">
            behance link
          </a>
          <a href={config.contact.linkedin} className="linkedin">
            linkedin link
          </a>
      </div>
    );
  }
}

export default Footer;
