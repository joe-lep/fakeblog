import { Fab } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

import { CREATE_NEW_POST } from '../../config/routeData';
import { useSelector } from '../../store/hooks';
import { InternalLink } from '../InternalLink';

export const CreatePostButton : React.FC = () => {
  const currentUserId = useSelector(state => state.activeProfile.profileId);

  if (!currentUserId) {
    return null;
  }

  return (
    <InternalLink
      routeData={CREATE_NEW_POST}
      sx={{
        position: 'fixed',
        bottom: 32,
        right: 32,
      }}
    >
      <Fab color="primary">
        <AddIcon />
      </Fab>
    </InternalLink>
  );
};
