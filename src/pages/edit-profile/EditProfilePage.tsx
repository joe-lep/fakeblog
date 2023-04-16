import React, { useCallback, useId } from 'react';
import { Button, Box, Grid } from '@mui/material';

import PageHeader from '../../components/PageHeader';
import { PaperContainer } from '../../components/styled';
import { ProfileForm } from '../../forms/ProfileForm/ProfileForm';
import { useNavigate, useParams } from 'react-router-dom';
import fillPathParams from '../../utils/fillPathParams';
import { PROFILE_BY_ID_ROUTE } from '../../config/routeData';
import { ProfilePayload } from '../../types';
import { useProfileQuery } from '../../api/useProfileQuery';
import { editProfile } from '../../api/editProfile';

export const EditProfilePage : React.FC = () => {
  const formId = useId();
  const navigate = useNavigate();
  const { profileId } = useParams();
  const profileQuery = useProfileQuery(Number(profileId));

  const onSubmit = useCallback((values : ProfilePayload) => {
    if (!profileId) {
      return Promise.reject(new Error('No Profile ID'));
    }

    return editProfile(Number(profileId), values).then(profile => {
      navigate(fillPathParams(PROFILE_BY_ID_ROUTE, { profileId: profile.id }))
    });
  }, [navigate, profileId]);

  if (!(profileQuery.isSuccess && profileQuery.data)) {
    return null;
  }

  return (
    <Box>
      <PageHeader title="New Profile" />
      <PaperContainer>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ProfileForm id={formId} onSubmit={onSubmit} existingProfile={profileQuery.data} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" form={formId}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </PaperContainer>
    </Box>
  );
};
