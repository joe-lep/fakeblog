import React from 'react';
import { useParams } from 'react-router-dom';
import { useSinglePostQuery } from '../../hooks/queries/useSinglePostQuery';
import PostDisplay from '../../components/PostDisplay';

export const ViewPostPage : React.FC = () => {
  const { postId } = useParams();
  const postQuery = useSinglePostQuery(Number(postId));

  if (!(postQuery.isSuccess && postQuery.data)) {
    return null;
  }

  return (
    <PostDisplay postData={postQuery.data} />
  );
};
