import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { RouteData } from '../../types';

type Props = Omit<LinkProps, 'to'> & {
  routeData: RouteData;
};

export const InternalLink : React.FC<Props> = ({ routeData, ...props }) => {
  return (
    <Link to={routeData.path} {...props} />
  );
};
