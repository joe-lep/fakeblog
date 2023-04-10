import React, { useMemo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

import { RouteData } from '../../types';
import fillPathParams from '../../utils/fillPathParams';

type Props = Omit<LinkProps, 'to'> & MuiLinkProps & {
  routeData: RouteData;
  pathParams?: any;
};

export const InternalLink : React.FC<Props> = ({ routeData, pathParams, ...props }) => {
  const path = useMemo(() => {
    if (pathParams) {
      return fillPathParams(routeData, pathParams);
    }

    return routeData.path;
  }, [routeData, pathParams]);

  return (
    <MuiLink component={Link} to={path} {...props} />
  );
};
