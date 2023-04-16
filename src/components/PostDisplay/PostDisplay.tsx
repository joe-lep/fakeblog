import React from 'react';
import { Divider, Paper, Stack, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { useProfileQuery } from '../../api/useProfileQuery';
import { UserPost } from '../../types/UserPost';
import UserNameDisplay from '../UserNameDisplay';
import OptionsMenu from '../OptionsMenu';
import { VIEW_POST_ROUTE } from '../../config/routeData';

type Props = {
  postData: UserPost;
};

export const PostDisplay : React.FC<Props> = ({ postData }) => {
  const authorQuery = useProfileQuery(postData.authorId);

  return (
    <Paper component="article" sx={{padding: 2, margin: 2}}>
      <header>
        <Stack justifyContent="space-between" alignItems="center" direction="row">
          <UserNameDisplay profileQuery={authorQuery} />
          <OptionsMenu
            ButtonComponent={IconButton}
            label={<MoreHorizIcon />}
            options={[
              {
                id: 'viewPost',
                label: 'View Post',
                routeData: VIEW_POST_ROUTE,
                pathParams: { postId: postData.id }
              },
            ]}
          />
        </Stack>
        <Divider />
        <h3>{postData.title}</h3>
      </header>
      <div>
        {postData.body}
      </div>
    </Paper>
  );
};
