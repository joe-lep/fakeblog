import React from 'react';

import { InternalNavLink } from '../../../components/InternalLink';
import * as routeData from '../../../config/routeData';

export const Navigation : React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <InternalNavLink routeData={routeData.MY_PROFILE_ROUTE} />
        </li>
        <li>
          <InternalNavLink routeData={routeData.PROFILE_LIST_ROUTE} />
        </li>
      </ul>
    </nav>
  );
};
