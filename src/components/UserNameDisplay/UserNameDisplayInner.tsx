import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Profile } from '../../types';
import ProfileAvatar from '../ProfileAvatar';

type Props = {
  profile: Profile;
  isHeader?: boolean;
}

export const UserNameDisplayInner : React.FC<Props> = ({ profile, isHeader }) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <ProfileAvatar profile={profile} isHeader={isHeader} />
      <Typography variant={isHeader ? 'h2' : 'body1'}>
        {profile.name}
      </Typography>
    </Stack>
  );
};
