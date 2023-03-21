import React from 'react';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Content />
    </div>
  );
};
