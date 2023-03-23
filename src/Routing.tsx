import React from 'react';
import { BrowserRouter, Routes, Route, RouteProps } from 'react-router-dom';

import * as routeData from './config/routeData';
import Layout from './layout';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import { RouteData } from './types';

const parseRoute = (routeData : RouteData, props : RouteProps) => (
  <Route path={routeData.path} {...props} />
);

const Routing : React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {parseRoute(routeData.MY_PROFILE_ROUTE, {element: (<MyProfile />)})}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
