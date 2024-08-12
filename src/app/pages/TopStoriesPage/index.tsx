import { HeaderWithContent } from '../../components/Header/HeaderWithContent';
import { BlogType } from '../../../helpers/BlogsHelper';
import { Fragment } from 'react';
import { BlogCard } from '../../components/Blog/BlogCard';
import { useGetBlogStoryByCategory } from '../../../helpers/useGetBlogStoryByCategory';

export function TopStoriesPage() {
  const blogs = useGetBlogStoryByCategory(BlogType.Top);

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
