import React from 'react';
import { Grid, Paper } from '@mui/material';
import ReactMarkdown from 'react-markdown';

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
          <ReactMarkdown>
            {profileQuery?.data?.bio ?? 'This user does not have a bio'}
          </ReactMarkdown>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <PostFeedDisplay authorId={profileId} />
      </Grid>
    </Grid>
  );
};
