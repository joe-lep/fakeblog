import React from 'react';
import CreatePostButton from '../../components/CreatePostButton';
import { PostFeedDisplay } from '../../components/PostFeedDisplay/PostFeedDisplay';

export const Home : React.FC = () => {
  return (
    <div>
      <PostFeedDisplay />
      <CreatePostButton />
    </div>
  );
};
