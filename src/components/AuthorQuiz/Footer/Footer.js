import React from 'react';
import '../../../style/bootstrap.min.css';

export function Footer() {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from &nbsp;
          <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a>&nbsp;
          and are in the public domain
        </p>
      </div>
    </div>
  );
}