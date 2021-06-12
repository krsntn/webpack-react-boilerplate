import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/global.css';

const Page1 = lazy(() => import('Pages/page1'));
const Page2 = lazy(() => import('Pages/page2'));
const Layout = lazy(() => import('Layouts/mainLayout'));

const fallbackComponent = <div>Loading...</div>;

const RouteWrapper = ({
  component: Component,
  layout: LayoutWrapper,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <LayoutWrapper>
          <Component {...routeProps} />
        </LayoutWrapper>
      )}
    />
  );
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={fallbackComponent}>
        <Switch>
          <RouteWrapper exact path="/" component={Page1} layout={Layout} />
          <RouteWrapper path="/page2" component={Page2} layout={Layout} />
        </Switch>
      </Suspense>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
