import React from 'react';
import { UseQueryResult } from 'react-query';
import { Profile } from '../../types';
import { LinkGate } from './LinkGate';

type Props = {
  profile?: Profile;
  profileQuery?: UseQueryResult<Profile | null>;
  link?: boolean;
  isHeader?: boolean;
};

export const UserNameDisplay : React.FC<Props> = ({ profile, profileQuery, link, isHeader }) => {
  if (profile) {
    return (
      <LinkGate profile={profile} link={link} isHeader={isHeader} />
    );
  }
  
  if (profileQuery) {
    if (profileQuery.isSuccess) {
      if (profileQuery.data) {
        return <LinkGate profile={profileQuery.data} link={link} isHeader={isHeader} />
      }
    }
  }

  return null;
};
