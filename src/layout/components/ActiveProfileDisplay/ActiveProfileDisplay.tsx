import React, { useCallback } from 'react';
import { useDialogManager } from '../../../components/DialogManager';

import OptionsMenu from '../../../components/OptionsMenu';
import SwitchProfileDialog from '../../../dialogs/SwitchProfileDialog';
import { useActiveProfileQuery } from '../../../hooks/queries/useActiveProfileQuery';

export const ActiveProfileDisplay : React.FC = () => {
  const profileData = useActiveProfileQuery();
  const { openDialog } = useDialogManager();

  const handleSwitchProfileClick = useCallback(() => {
    openDialog(SwitchProfileDialog).then(value => {
      console.log('Resolved', value);
    })
  }, [openDialog]);

  return (
    <OptionsMenu
      label={profileData.data == null ? 'No Profile' : profileData.data.name}
      options={[
        {
          id: 'switchProfile',
          label: 'Switch Profile',
          action: handleSwitchProfileClick,
        }
      ]}
    />
  );
};
