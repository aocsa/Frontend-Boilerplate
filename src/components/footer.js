import React from 'react';
import { injectGlobal } from 'emotion';
import styled from 'emotion/react';

// Global CSS styles for Bootstrap Sticky Footer

/* eslint-disable */
injectGlobal`
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 120px;
}
.footer {
  position: absolute;
  bottom: 0;
  height: 120px;
  width: 100%;
  background: transparent linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
  padding: 10px 5px;
}
`;
/* eslint-enable */

const FooterFlexContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Footer = () => (
  <footer className="footer">
    <FooterFlexContainer>
      <span className="text-muted">Place footer content here.</span>
      <span className="text-muted">Address, contact info</span>
      <span className="text-muted">Links, Jobs etc..</span>
    </FooterFlexContainer>
  </footer>
);

export default Footer;

// Basic footer component with Bootstrap Sticky Footer styles.
