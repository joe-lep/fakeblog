import React, { useCallback, useMemo } from 'react';
import { Divider, Paper, Stack, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ReactMarkdown from 'react-markdown';

import { useProfileQuery } from '../../api/useProfileQuery';
import { UserPost } from '../../types/UserPost';
import UserNameDisplay from '../UserNameDisplay';
import OptionsMenu from '../OptionsMenu';
import { EDIT_POST_ROUTE, HOME_ROUTE, VIEW_POST_ROUTE } from '../../config/routeData';
import useActiveProfileId from '../../hooks/useActiveProfileId';
import { REASON_DIALOG_CLOSED, useDialogManager } from '@joe-lep/react-dialog-manager';
import ConfirmDialog from '../../dialogs/ConfirmDialog';
import { useNavigate } from 'react-router-dom';
import { useDeletePostMutation } from '../../hooks/mutations/useDeletePostMutation';

type Props = {
  postData: UserPost;
};

export const PostDisplay : React.FC<Props> = ({ postData }) => {
  const activeProfileId = useActiveProfileId();
  const authorQuery = useProfileQuery(postData.authorId);
  const { openDialog } = useDialogManager();
  const navigate = useNavigate();
  const deletePostMutation = useDeletePostMutation();

  const handleDeleteClick = useCallback(
    () => {
      openDialog(
        ConfirmDialog,
        {
          componentProps: {
            message: 'Are you sure you want to delete this post?',
            confirmLabel: 'Delete',
          },
        },
      ).then(() => {
        deletePostMutation.mutate(postData, { onSuccess: () => {
          navigate(HOME_ROUTE.path);
        }})
      }).catch((e) => {
        if (e !== REASON_DIALOG_CLOSED) {
          throw e;
        }
      });
    },
    [openDialog, postData, deletePostMutation, navigate],
  );

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
      {
        id: 'deletePost',
        label: 'Delete Post',
        action: handleDeleteClick,
      },
    ];

    const disallowedOptions: any = {};

    if (!(activeProfileId != null && activeProfileId === postData.authorId)) {
      disallowedOptions.editPost = true;
      disallowedOptions.deletePost = true;
    }

    return baseOptions.filter(item => !disallowedOptions[item.id]);
  }, [postData, activeProfileId, handleDeleteClick]);

  return (
    <Paper component="article" sx={{padding: 2, margin: 2}}>
      <header>
        <Stack justifyContent="space-between" alignItems="center" direction="row">
          <UserNameDisplay profileQuery={authorQuery} />
          <OptionsMenu
            ButtonComponent={IconButton}
            label={<MoreHorizIcon />}
            options={options}
            buttonProps={{ 'aria-label': 'Show post options'}}
          />
        </Stack>
        <Divider />
        <h3>{postData.title}</h3>
      </header>
      <div>
        <ReactMarkdown>
          {postData.body}
        </ReactMarkdown>
      </div>
    </Paper>
  );
};
