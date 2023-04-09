import React from 'react';
import { PROFILE_BY_ID_ROUTE } from '../../config/routeData';
import { Profile } from '../../types';
import { InternalLink } from '../InternalLink';
import { UserNameDisplayInner } from './UserNameDisplayInner';

type Props = {
  profile: Profile;
  link?: boolean;
  isHeader?: boolean;
}

export const LinkGate : React.FC<Props> = ({ profile, link, isHeader }) => {
  if (link) {
    return (
      <InternalLink routeData={PROFILE_BY_ID_ROUTE} pathParams={{ profileId: profile.id }}>
        <UserNameDisplayInner profile={profile} isHeader={isHeader} />
      </InternalLink>
    );
  }

  return (
    <UserNameDisplayInner profile={profile} isHeader={isHeader} />
  );
};
