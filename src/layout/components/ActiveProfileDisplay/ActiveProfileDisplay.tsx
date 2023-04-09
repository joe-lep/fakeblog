import React, { useCallback } from 'react';
import { useDialogManager } from '@joe-lep/react-dialog-manager';

import OptionsMenu from '../../../components/OptionsMenu';
import SwitchProfileDialog from '../../../dialogs/SwitchProfileDialog';
import { useActiveProfileQuery } from '../../../hooks/queries/useActiveProfileQuery';
import UserNameDisplay from '../../../components/UserNameDisplay';
import { Button, ButtonBase } from '@mui/material';
import { PROFILE_BY_ID_ROUTE } from '../../../config/routeData';
import { useDispatch } from '../../../store/hooks';
import { unsetActiveProfile } from '../../../store/reducers/activeProfile';
import ConfirmDialog from '../../../dialogs/ConfirmDialog';

export const ActiveProfileDisplay : React.FC = () => {
  const dispatch = useDispatch();
  const profileData = useActiveProfileQuery();
  const { openDialog } = useDialogManager();

  const handleSwitchProfileClick = useCallback(() => {
    openDialog(SwitchProfileDialog);
  }, [openDialog]);

  const handleSignoutClick = useCallback(() => {
    openDialog(ConfirmDialog, { componentProps: { message: 'Are you sure you want to sign out?', confirmLabel: 'Sign Out' }})
      .then(() => {
        dispatch(unsetActiveProfile());
      })
  }, [dispatch, openDialog]);

  if (!profileData.data) {
    return (
      <Button variant="contained" onClick={handleSwitchProfileClick}>
        Select Profile
      </Button>
    )
  }

  return (
    <OptionsMenu
      label={<UserNameDisplay profileQuery={profileData} />}
      ButtonComponent={ButtonBase}
      options={[
        {
          id: 'viewProfile',
          label: 'View Profile',
          routeData: PROFILE_BY_ID_ROUTE,
          pathParams: {profileId: profileData.data.id}
        },
        {
          id: 'switchProfile',
          label: 'Switch Profile',
          action: handleSwitchProfileClick,
        },
        {
          id: 'signOut',
          label: 'Sign Out',
          action: handleSignoutClick,
        },
      ]}
    />
  );
};
