import { Grid, Paper } from '@mui/material';
import React from 'react';
import { useProfileQuery } from '../../../api/useProfileQuery';
import { PostFeedDisplay } from '../../PostFeedDisplay/PostFeedDisplay';
import UserNameDisplay from '../../UserNameDisplay';

type Props = {
  profileId: number;
}

export const ProfileView : React.FC<Props> = ({ profileId }) => {
  const profileQuery = useProfileQuery(profileId);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <UserNameDisplay isHeader profileQuery={profileQuery} />
      </Grid>
      <Grid item xs={12}>
        <Paper>
          {profileQuery?.data?.bio ?? 'This user does not have a bio'}
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <PostFeedDisplay authorId={profileId} />
      </Grid>
    </Grid>
  );
};
