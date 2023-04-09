import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export const Content = () => {
  return (
    <Container component="main">
      <Outlet />
    </Container>
  );
};
