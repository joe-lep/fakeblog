import { Box, Button, Grid } from '@mui/material';
import React, { useCallback, useId } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { PaperContainer } from '../../components/styled';
import { VIEW_POST_ROUTE } from '../../config/routeData';
import UserPostForm from '../../forms/UserPostForm';
import { UserPostInput } from '../../types/UserPost';
import { useSinglePostQuery } from '../../hooks/queries/useSinglePostQuery';
import useActiveProfileId from '../../hooks/useActiveProfileId';
import { editPost } from '../../api/editPost';
import fillPathParams from '../../utils/fillPathParams';

export const EditPostPage : React.FC = () => {
  const formId = useId();
  const postId = Number(useParams().postId);
  const navigate = useNavigate();
  const activeProfileId = useActiveProfileId();
  const postQuery = useSinglePostQuery(postId);

  const handleSubmit = useCallback((values : UserPostInput) => {
    if (!(postQuery.isSuccess && postQuery.data && postQuery.data.authorId === activeProfileId)) {
      return;
    }

    editPost(Number(postQuery.data.id), values).then((postId) => {
      navigate(fillPathParams(VIEW_POST_ROUTE, { postId }))
    });
  }, [postQuery, activeProfileId, navigate]);

  if (!(postQuery.isSuccess && postQuery.data)) {
    return null;
  }

  return (
    <Box>
      <PageHeader title="New Post" />
      <PaperContainer>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <UserPostForm id={formId} onSubmit={handleSubmit} existingPost={postQuery.data} />
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
