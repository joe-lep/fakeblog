import React, { useCallback } from 'react';
import OptionsMenu from '../../OptionsMenu';
import { Profile } from '../../../types';
import { useDispatch } from '../../../store/hooks';
import { setActiveProfile } from '../../../store/reducers/activeProfile';

type Props = {
  profile: Profile;
};

export const ProfileListItem : React.FC<Props> = ({ profile }) => {
  const dispatch = useDispatch();

  const setProfileAsActive = useCallback(() => {
    dispatch(setActiveProfile({profileId: Number(profile.id)}))
  }, [dispatch, profile.id]);

  return (
    <div>
      {profile.name}
      <OptionsMenu
        label="Options"
        options={[
          {
            id: 'setActiveProfile',
            label: 'Set as Active Profile',
            action: setProfileAsActive,
          }
        ]}
      />
    </div>
  );
};
