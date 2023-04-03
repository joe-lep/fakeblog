import { Button, Grid } from '@mui/material';
import React, { useCallback, useId } from 'react';
import UserPostForm from '../../forms/UserPostForm';
import { useCreatePostMutation } from '../../hooks/mutations/useCreatePostMutation';
import { UserPostInput } from '../../types/UserPost';

export const CreatePostPage : React.FC = () => {
  const formId = useId();
  const createPostMutation = useCreatePostMutation();

  const handleSubmit = useCallback((values : UserPostInput) => {
    createPostMutation.mutate(values);
  }, [createPostMutation]);

  return (
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
  );
};
