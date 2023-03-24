import React from 'react';
import { useActiveProfileQuery } from '../../../hooks/queries/useActiveProfileQuery';

export const ActiveProfileDisplay : React.FC = () => {
  const profileData = useActiveProfileQuery();

  return (
    <div>
      {profileData.data == null ? 'No Profile' : profileData.data.name}
    </div>
  );
};
