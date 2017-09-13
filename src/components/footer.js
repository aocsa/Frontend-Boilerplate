import React from 'react';
import { injectGlobal } from 'emotion';

// Global CSS styles for Bootstrap Sticky Footer

injectGlobal`
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 60px;
}
.footer {
  position: absolute;
  bottom: 0;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
}
`;

const Footer = () => (
  <container>
    <footer className="footer">
      <div className="container">
        <span className="text-muted">Place footer content here.</span>
      </div>
    </footer>
  </container>
);

export default Footer;

// Basic footer component with Bootstrap Sticky Footer styles.
