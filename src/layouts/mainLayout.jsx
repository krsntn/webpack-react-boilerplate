import React from 'react';
import Nav from 'Components/Nav';

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav />
      {children}
    </React.Fragment>
  );
};

export default MainLayout;
