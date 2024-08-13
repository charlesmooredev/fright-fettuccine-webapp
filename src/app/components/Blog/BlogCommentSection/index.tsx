import { BlogData } from '../../../../types/generated';
import { Fragment } from 'react';
import { BlogCommentCard } from './BlogCommentCard';
import { BlogCommentActions } from './BlogCommentActions';

interface Props {
  data: BlogData;
}

export function BlogCommentSection({ data }: Props) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full space-y-2 lg:w-8/12">
        <BlogCommentActions />
        {data.comments.map((comment, index) => (
          <Fragment key={`${comment.poster}-${index}`}>
            <BlogCommentCard data={comment} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
