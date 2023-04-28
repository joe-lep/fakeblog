import React, { useCallback } from 'react';
import { Stack } from '@mui/material';

import { PaperContainer } from '../../styled';
import OptionsMenu from '../../OptionsMenu';
import { Profile } from '../../../types';
import { useDispatch } from '../../../store/hooks';
import { setActiveProfile } from '../../../store/reducers/activeProfile';
import UserNameDisplay from '../../UserNameDisplay';
import { PROFILE_BY_ID_ROUTE, PROFILE_EDIT_ROUTE } from '../../../config/routeData';
import { useDialogManager } from '@joe-lep/react-dialog-manager';
import ConfirmDialog from '../../../dialogs/ConfirmDialog';
import { useDeleteProfileMutation } from '../../../hooks/mutations/useDeleteProfileMutation';

type Props = {
  profile: Profile;
};

export const ProfileListItem : React.FC<Props> = ({ profile }) => {
  const dispatch = useDispatch();
  const { openDialog } = useDialogManager();
  const deleteProfileMutation = useDeleteProfileMutation();

  const setProfileAsActive = useCallback(() => {
    dispatch(setActiveProfile({profileId: Number(profile.id)}))
  }, [dispatch, profile.id]);

  const handleDeleteProfileClick = useCallback(() => {
    openDialog(
      ConfirmDialog,
      {
        componentProps: {
          message: `Are you sure you want to delte the profile ${profile.name}?`,
          confirmLabel: 'Delete',
        },
      },
    )
    .then(() => {
      deleteProfileMutation.mutate(profile);
    })
  }, [openDialog, profile, deleteProfileMutation]);

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
            },
            {
              id: 'editProfile',
              label: 'Edit Profile',
              routeData: PROFILE_EDIT_ROUTE,
              pathParams: { profileId: `${profile.id}` },
            },
            {
              id: 'deleteProfile',
              label: 'Delete Profile',
              action: handleDeleteProfileClick,
            },
          ]}
        />
      </Stack>
    </PaperContainer>
  );
};
