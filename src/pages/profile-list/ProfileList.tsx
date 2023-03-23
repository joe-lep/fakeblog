import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <button type="button" onClick={onNewProfileClick}>
          New Profile
        </button>
      </PageHeader>
    </div>
  );
};
