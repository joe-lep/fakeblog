import React from 'react';

import { InternalLink } from '../../../components/InternalLink';
import * as routeData from '../../../config/routeData';

export const Header = () => {
  return (
    <header>
      <h1>
        <InternalLink routeData={routeData.HOME_ROUTE}>
          Fake Blog
        </InternalLink>
      </h1>
    </header>
  );
};
