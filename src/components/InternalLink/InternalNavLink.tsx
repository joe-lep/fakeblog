import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import { RouteData } from '../../types';

type Props = Omit<NavLinkProps, 'to'> & {
  routeData: RouteData;
};

export const InternalNavLink : React.FC<Props> = ({ routeData, ...props }) => {
  return (
    <NavLink to={routeData.path} {...props}>
      {routeData.label}
    </NavLink>
  );
};
