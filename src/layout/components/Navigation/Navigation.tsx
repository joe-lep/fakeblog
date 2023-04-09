import { Box, Stack, styled } from '@mui/material';
import React from 'react';

import { InternalNavLink } from '../../../components/InternalLink';
import * as routeData from '../../../config/routeData';

const NavLi = styled('li')({
  listStyleType: 'none',
});

export const Navigation : React.FC = () => {
  return (
    <Box component="nav">
      <Stack spacing={2} component="ul" direction={{ md: 'row', lg: 'column' }}>
        <NavLi>
          <InternalNavLink routeData={routeData.HOME_ROUTE} />
        </NavLi>
        <NavLi>
          <InternalNavLink routeData={routeData.PROFILE_LIST_ROUTE} />
        </NavLi>
      </Stack>
    </Box>
  );
};
