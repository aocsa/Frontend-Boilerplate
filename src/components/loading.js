import React from 'react';

const LoadingPage = () => <div>Loading.. please wait..</div>;
export default LoadingPage;

// This is the "Loading please wait" type of component to be displayed WHEN SPLIT ROUTES ARE LOADING. They are code split so they only load when requested. Use code splitting for large components which don't need to be shown to every user, such as, user dashboard isn't needed for everyone who wants to load the landing page. They need a page that loads instantly, not one that slowly loads EVERYTHING that they may or not need at start.
