import { Fragment } from 'react';
import Nav from 'Components/Nav';

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      {children}
    </Fragment>
  );
};

export default MainLayout;
