import React, { Fragment } from 'react';

const Footer = () => {
  var today = new Date();
  var year = today.getFullYear();

  return (
    <Fragment>
        <div className="panel">
        <p>&copy; {year} clausing-lage</p>
        </div>
    </Fragment>
  );
}

export default Footer;