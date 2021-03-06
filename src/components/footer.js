import React from 'react';
import styled from 'emotion/react';

// Global CSS styles for Bootstrap Sticky Footer

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
