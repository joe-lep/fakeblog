import React, { useCallback, useMemo } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import { useDialogControls } from '@joe-lep/react-dialog-manager';
import { useDispatch, useSelector } from '../../store/hooks';
import { useProfilesQuery } from '../../api/useProfilesQuery';
import { ControlledSelect } from '../../components/ControlledFields';
import { setActiveProfile } from '../../store/reducers/activeProfile';
import { CREATE_PROFILE_ROUTE } from '../../config/routeData';
import { InternalLink } from '../../components/InternalLink';

type Props = {
  open: boolean;
  onClose: () => void;
}

export const SwitchProfileDialog : React.FC<Props> = () => {
  const { submitDialog, closeDialog, open } = useDialogControls();
  const activeUserId = useSelector(state => state.activeProfile.profileId);
  const dispatch = useDispatch();
  const profilesQuery = useProfilesQuery();
  const defaultValues : FieldValues = {
    activeUserId: activeUserId || '',
  };

  const { control, handleSubmit } = useForm({ defaultValues })

  const submitSuccess = useCallback((values : FieldValues) => {
    dispatch(setActiveProfile({ profileId: values.activeUserId }));
    submitDialog(values.activeUserId);
  }, [submitDialog, dispatch]);

  const profileOptions = useMemo(() => {
    if (!profilesQuery.isSuccess) {
      return undefined;
    }

    return profilesQuery.data.map(item => ({
      value: Number(item.id),
      label: item.name,
    }));
  }, [profilesQuery]);

  const content = useMemo(() => {
    if (!profilesQuery.isSuccess) {
      return null;
    }

    if (!profilesQuery.data.length) {
      return (
        <DialogContent>
          <Typography>
            There are not currently any profiles available to select. Please create a new profile.
          </Typography>
          <Box>
            <InternalLink routeData={CREATE_PROFILE_ROUTE}>
              <Button variant="contained">
                Create New Profile
              </Button>
            </InternalLink>
          </Box>
        </DialogContent>
      );
    }

    return (
      <form onSubmit={handleSubmit(submitSuccess)}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ControlledSelect
                name="activeUserId"
                control={control}
                rules={{ required: true }}
                label="Profile"
                options={profileOptions}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Close</Button>
          <Button type="submit">Confirm</Button>
        </DialogActions>
      </form>
    )
  }, [profilesQuery, control, profileOptions, closeDialog, handleSubmit, submitSuccess])

  return (
    <Dialog open={open} onClose={closeDialog} fullWidth>
      <DialogTitle>Select Profile</DialogTitle>
      {content}
    </Dialog>
  );
};
