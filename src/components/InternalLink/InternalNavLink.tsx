import React from 'react';
import { Link } from '@mui/material'
import { NavLink, LinkProps } from 'react-router-dom';

import { RouteData } from '../../types';

type Props = Omit<LinkProps, 'to'> & {
  routeData: RouteData;
  routeParams?: any;
};

export const InternalNavLink : React.FC<Props> = ({ routeData, ...props }) => {
  return (
    <Link component={NavLink} to={routeData.path} {...props}>
      {routeData.label}
    </Link>
  );
};
