import React, { useMemo } from 'react';
import { Divider, Paper, Stack, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { useProfileQuery } from '../../api/useProfileQuery';
import { UserPost } from '../../types/UserPost';
import UserNameDisplay from '../UserNameDisplay';
import OptionsMenu from '../OptionsMenu';
import { EDIT_POST_ROUTE, VIEW_POST_ROUTE } from '../../config/routeData';
import useActiveProfileId from '../../hooks/useActiveProfileId';

type Props = {
  postData: UserPost;
};

export const PostDisplay : React.FC<Props> = ({ postData }) => {
  const activeProfileId = useActiveProfileId();
  const authorQuery = useProfileQuery(postData.authorId);

  const options = useMemo(() => {
    const baseOptions = [
      {
        id: 'viewPost',
        label: 'View Post',
        routeData: VIEW_POST_ROUTE,
        pathParams: { postId: postData.id }
      },
      {
        id: 'editPost',
        label: 'Edit Post',
        routeData: EDIT_POST_ROUTE,
        pathParams: { postId: postData.id }
      },
    ];

    const disallowedOptions: any = {};

    if (!(activeProfileId != null && activeProfileId === postData.authorId)) {
      disallowedOptions.editPost = true;
    }

    return baseOptions.filter(item => !disallowedOptions[item.id]);
  }, [postData, activeProfileId]);

  return (
    <Paper component="article" sx={{padding: 2, margin: 2}}>
      <header>
        <Stack justifyContent="space-between" alignItems="center" direction="row">
          <UserNameDisplay profileQuery={authorQuery} />
          <OptionsMenu
            ButtonComponent={IconButton}
            label={<MoreHorizIcon />}
            options={options}
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
