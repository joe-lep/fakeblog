import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import PageHeader from '../../components/PageHeader';
import { CREATE_PROFILE_ROUTE } from '../../config/routeData';

export const ProfileList : React.FC = () => {
  const navigate = useNavigate();
  const onNewProfileClick = useCallback(() => {
    navigate(CREATE_PROFILE_ROUTE.path);
  }, [navigate]);

  return (
    <div>
      <PageHeader title="Profile List">
        <Button onClick={onNewProfileClick}>
          New Profile
        </Button>
      </PageHeader>
    </div>
  );
};
