import React from 'react';
import Header from './Header';
import Nav from './Nav';

function TopBar() {
  return (
    <div className="top-bar">
      <Header />
      <Nav />
    </div>
  );
}

export default TopBar;