import React from 'react';
import { Typography } from '@mui/material';

import { InternalLink } from '../../../components/InternalLink';
import { HOME_ROUTE } from '../../../config/routeData';

export const Header = () => {
  return (
    <InternalLink color="inherit" routeData={HOME_ROUTE}>
      <Typography variant="h1">
          Fake Blog
      </Typography>
    </InternalLink>
  );
};
