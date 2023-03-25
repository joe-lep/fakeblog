import React, { useCallback, useMemo } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useDialogControls } from '../../components/DialogManager';
import { useDispatch, useSelector } from '../../store/hooks';
import { useProfilesQuery } from '../../api/useProfilesQuery';
import { ControlledSelect } from '../../components/ControlledFields';
import { setActiveProfile } from '../../store/reducers/activeProfile';

type Props = {
  open: boolean;
  onClose: () => void;
}

export const SwitchProfileDialog : React.FC<Props> = ({open, onClose}) => {
  const { dialogSubmit } = useDialogControls();
  const activeUserId = useSelector(state => state.activeProfile.profileId);
  const dispatch = useDispatch();
  const profilesQuery = useProfilesQuery();
  const defaultValues : FieldValues = {
    activeUserId: activeUserId || '',
  };

  const { control, handleSubmit } = useForm({ defaultValues })

  const submitSuccess = useCallback((values : FieldValues) => {
    dispatch(setActiveProfile({ profileId: values.activeUserId }));
    dialogSubmit(values.activeUserId);
  }, [dialogSubmit, dispatch]);

  const profileOptions = useMemo(() => {
    if (!profilesQuery.isSuccess) {
      return undefined;
    }

    return profilesQuery.data.map(item => ({
      value: Number(item.id),
      label: item.name,
    }));
  }, [profilesQuery]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Switch Profile</DialogTitle>
      <form onSubmit={handleSubmit(submitSuccess)}>
        <DialogContent>
          <ControlledSelect
            name="activeUserId"
            control={control}
            rules={{ required: true }}
            label="Profile"
            options={profileOptions}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button type="submit">Confirm</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
