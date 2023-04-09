import React from 'react';
import { AppBar, Box, Stack } from '@mui/material';

import ActiveProfileDisplay from './components/ActiveProfileDisplay';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

export const Layout = () => {
  return (
    <Box>
      <AppBar position="relative" sx={{px: 4, py: 2}}>
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
          <Header />
          <ActiveProfileDisplay />
        </Stack>
      </AppBar>
      <Stack direction={{ md: 'column', lg: 'row' }}>
        <Box>
          <Navigation />
        </Box>
        <Content />
      </Stack>
    </Box>
  );
};
