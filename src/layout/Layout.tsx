import React from 'react';
import ActiveProfileDisplay from './components/ActiveProfileDisplay';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

export const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Navigation />
        <ActiveProfileDisplay />
      </div>
      <Content />
    </div>
  );
};
