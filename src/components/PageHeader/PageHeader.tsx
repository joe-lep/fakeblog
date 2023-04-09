import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

export const PageHeader : React.FC<Props> = ({ title, children }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" component="header">
      <Typography variant="h2">{title}</Typography>
      <Box>
        {children}
      </Box>
    </Stack>
  );
};
