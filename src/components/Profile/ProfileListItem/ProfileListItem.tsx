import React from 'react';
import { Profile } from '../../../types';

type Props = {
  profile: Profile;
};

export const ProfileListItem : React.FC<Props> = ({ profile }) => {
  return (
    <div>
      {profile.name}
    </div>
  );
};
