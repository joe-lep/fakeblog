import React, { useCallback } from 'react';
import { Stack } from '@mui/material';

import { PaperContainer } from '../../styled';
import OptionsMenu from '../../OptionsMenu';
import { Profile } from '../../../types';
import { useDispatch } from '../../../store/hooks';
import { setActiveProfile } from '../../../store/reducers/activeProfile';
import UserNameDisplay from '../../UserNameDisplay';
import { PROFILE_BY_ID_ROUTE } from '../../../config/routeData';

type Props = {
  profile: Profile;
};

export const ProfileListItem : React.FC<Props> = ({ profile }) => {
  const dispatch = useDispatch();

  const setProfileAsActive = useCallback(() => {
    dispatch(setActiveProfile({profileId: Number(profile.id)}))
  }, [dispatch, profile.id]);

  return (
    <PaperContainer>
      <Stack direction="row" justifyContent="space-between">
        <UserNameDisplay profile={profile} />
        <OptionsMenu
          label="Options"
          options={[
            {
              id: 'navigateToProfile',
              label: 'View Profile',
              routeData: PROFILE_BY_ID_ROUTE,
              pathParams: { profileId: `${profile.id}` },
            },
            {
              id: 'setActiveProfile',
              label: 'Set as Active Profile',
              action: setProfileAsActive,
            }
          ]}
        />
      </Stack>
    </PaperContainer>
  );
};
