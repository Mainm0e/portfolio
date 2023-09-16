import React, { useEffect, useState } from 'react';
import Home from './sections/Home';
import Contact from './sections/Contact';

const NotFound: React.FC = () => {
  return <div>Not Found</div>;
};

const Router: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const routeComponents: { [key: string]: React.FC } = {
    '/': Home,
    '/contact': Contact,
  };

  const CurrentComponent = routeComponents[currentRoute] || NotFound;

  return <CurrentComponent />;
};

export default Router;
