import React from 'react';
import { Outlet } from 'react-router-dom';

export const Content = () => {
  return (
    <main>
      <p>Content below here</p>
      <Outlet />
    </main>
  );
};
