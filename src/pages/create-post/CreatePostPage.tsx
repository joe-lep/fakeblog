import { Box, Button, Grid } from '@mui/material';
import React, { useCallback, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { PaperContainer } from '../../components/styled';
import { HOME_ROUTE } from '../../config/routeData';
import UserPostForm from '../../forms/UserPostForm';
import { useCreatePostMutation } from '../../hooks/mutations/useCreatePostMutation';
import { UserPostInput } from '../../types/UserPost';

export const CreatePostPage : React.FC = () => {
  const formId = useId();
  const navigate = useNavigate();
  const onSuccess = useCallback(() => {
    navigate(HOME_ROUTE.path);
  }, [navigate]);

  const createPostMutation = useCreatePostMutation();

  const handleSubmit = useCallback((values : UserPostInput) => {
    createPostMutation.mutate(values, { onSuccess });
  }, [createPostMutation, onSuccess]);

  return (
    <Box>
      <PageHeader title="New Post" />
      <PaperContainer>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <UserPostForm id={formId} onSubmit={handleSubmit} />
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
