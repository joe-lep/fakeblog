import React, { useCallback, useId } from 'react';
import { Button, Box, Grid } from '@mui/material';

import { createNewProfile } from '../../api/createNewProfile';
import PageHeader from '../../components/PageHeader';
import { PaperContainer } from '../../components/styled';
import { ProfileForm } from '../../forms/ProfileForm/ProfileForm';
import { useNavigate } from 'react-router-dom';
import fillPathParams from '../../utils/fillPathParams';
import { PROFILE_BY_ID_ROUTE } from '../../config/routeData';
import { ProfilePayload } from '../../types';

export const NewProfile : React.FC = () => {
  const formId = useId();
  const navigate = useNavigate();

  const onSubmit = useCallback((values : ProfilePayload) => {
    return createNewProfile(values).then(profile => {
      navigate(fillPathParams(PROFILE_BY_ID_ROUTE, { profileId: profile.id }))
    });
  }, [navigate]);

  return (
    <Box>
      <PageHeader title="New Profile" />
      <PaperContainer>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ProfileForm id={formId} onSubmit={onSubmit} />
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
