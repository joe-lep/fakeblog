import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import PageHeader from '../../components/PageHeader';
import { CREATE_PROFILE_ROUTE } from '../../config/routeData';
import { useProfilesQuery } from '../../api/useProfilesQuery';
import ProfileListItem from '../../components/Profile/ProfileListItem';
import { Profile } from '../../types';

export const ProfileList : React.FC = () => {
  const navigate = useNavigate();
  const onNewProfileClick = useCallback(() => {
    navigate(CREATE_PROFILE_ROUTE.path);
  }, [navigate]);

  const profileListQuery = useProfilesQuery();

  const renderedProfileList = useMemo(() => {
    if (!(profileListQuery.isSuccess && Array.isArray(profileListQuery.data))) {
      return [];
    }

    const profileList : Array<Profile> = profileListQuery.data;

    return profileList.map(profile => (
      <ProfileListItem key={String(profile.id)} profile={profile} />
    ))
  }, [profileListQuery]);

  return (
    <div>
      <PageHeader title="Profile List">
        <Button onClick={onNewProfileClick}>
          New Profile
        </Button>
      </PageHeader>
      <div>
        {renderedProfileList}
      </div>
    </div>
  );
};
