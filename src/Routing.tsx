import { DialogManager } from '@joe-lep/react-dialog-manager';
import React from 'react';
import { BrowserRouter, Routes, Route, RouteProps } from 'react-router-dom';

import * as routeData from './config/routeData';
import Layout from './layout';
import CreatePostPage from './pages/create-post';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import NewProfile from './pages/new-profile';
import ProfilePage from './pages/profile';
import ProfileList from './pages/profile-list';
import { RouteData } from './types';

const parseRoute = (routeData : RouteData, props : RouteProps) => (
  <Route path={routeData.path} {...props} />
);

const Routing : React.FC = () => {
  return (
    <BrowserRouter basename="/fakeblog">
      <DialogManager>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {parseRoute(routeData.MY_PROFILE_ROUTE, { element: (<MyProfile />) })}
            {parseRoute(routeData.PROFILE_LIST_ROUTE, {element: (<ProfileList />) })}
            {parseRoute(routeData.CREATE_PROFILE_ROUTE, {element: (<NewProfile />) })}
            {parseRoute(routeData.CREATE_NEW_POST, { element: (<CreatePostPage />) })}
            {parseRoute(routeData.PROFILE_BY_ID_ROUTE, { element: (<ProfilePage />) })}
          </Route>
        </Routes>
      </DialogManager>
    </BrowserRouter>
  );
};

export default Routing;
