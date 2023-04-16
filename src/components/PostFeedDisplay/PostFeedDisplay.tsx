import React, { useMemo } from 'react';
import { useUserPostsQuery } from '../../hooks/queries/useUserPostsQuery';
import PostDisplay from '../PostDisplay';

type Props = {
  authorId?: number;
};

export const PostFeedDisplay : React.FC<Props> = ({ authorId }) => {
  const userPostsQuery = useUserPostsQuery(authorId);

  const renderedPosts = useMemo(() => {
    if (userPostsQuery.isSuccess && Array.isArray(userPostsQuery.data)) {
      return userPostsQuery.data.map(item => (
        <PostDisplay key={Number(item.id)} postData={item} />
      ));
    }

    return [];
  }, [userPostsQuery.isSuccess, userPostsQuery.data]);

  return (
    <div>
      {renderedPosts}
    </div>
  );
};
