import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileView from '../../components/Profile/ProfileView';

export const ProfilePage : React.FC = () => {
  const pageParams = useParams();

  const profileId = Number(pageParams.profileId);

  return (
    <ProfileView profileId={profileId} />
  );
};
