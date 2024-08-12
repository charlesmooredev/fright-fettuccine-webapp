import { HeaderWithContent } from '../../components/Header/HeaderWithContent';
import { Fragment } from 'react';
import { BlogCard } from '../../components/Blog/BlogCard';
import { useGetBlogStoryByCategory } from '../../../helpers/useGetBlogStoryByCategory';
import { BlogType } from '../../../helpers/BlogsHelper';

export function ClassicsPage() {
  const blogs = useGetBlogStoryByCategory(BlogType.Classics);
  return (
    <HeaderWithContent>
      <div>
        {blogs.map(story => (
          <Fragment key={story.id}>
            <BlogCard data={story} />
          </Fragment>
        ))}
      </div>
    </HeaderWithContent>
  );
}
