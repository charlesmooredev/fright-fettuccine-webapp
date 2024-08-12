import { useMemo } from 'react';
import { blogsArray, BlogType } from './BlogsHelper';

export function useGetBlogStoryByCategory(type: BlogType) {
  return useMemo(() => {
    return blogsArray.filter(blog => blog.type === type);
  }, [type]);
}
