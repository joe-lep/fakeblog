import React, { useMemo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

import { RouteData } from '../../types';

type Props = Omit<LinkProps, 'to'> & {
  routeData: RouteData;
  pathParams?: any;
};

const urlParamRegex = /:([^/$]+)/g;

const fillPathParams = (path: string, pathParams: any) =>
  path.replaceAll(urlParamRegex, (match, paramId) => pathParams[paramId] ?? match);

export const InternalLink : React.FC<Props> = ({ routeData, pathParams, ...props }) => {
  const path = useMemo(() => {
    if (pathParams) {
      return fillPathParams(routeData.path, pathParams);
    }

    return routeData.path;
  }, [routeData, pathParams]);

  return (
    <MuiLink component={Link} to={path} {...props} />
  );
};
