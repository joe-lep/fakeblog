import React from 'react';
import { useProfileQuery } from '../../api/useProfileQuery';
import { UserPost } from '../../types/UserPost';

type Props = {
  postData: UserPost;
};

export const PostDisplay : React.FC<Props> = ({ postData }) => {
  const authorQuery = useProfileQuery(postData.authorId);

  return (
    <article>
      <header>
        <h3>{postData.title}</h3>
        <h4>By: {authorQuery.data?.name || ''}</h4>
      </header>
      <div>
        {postData.body}
      </div>
    </article>
  );
};
