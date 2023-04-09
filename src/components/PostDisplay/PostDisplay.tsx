import React from 'react';
import { Divider, Paper } from '@mui/material';

import { useProfileQuery } from '../../api/useProfileQuery';
import { UserPost } from '../../types/UserPost';
import UserNameDisplay from '../UserNameDisplay';

type Props = {
  postData: UserPost;
};

export const PostDisplay : React.FC<Props> = ({ postData }) => {
  const authorQuery = useProfileQuery(postData.authorId);

  return (
    <Paper component="article" sx={{padding: 2, margin: 2}}>
      <header>
        <UserNameDisplay profileQuery={authorQuery} />
        <Divider />
        <h3>{postData.title}</h3>
      </header>
      <div>
        {postData.body}
      </div>
    </Paper>
  );
};
