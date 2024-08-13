import { HeaderWithContent } from '../../components/Header/HeaderWithContent';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { blogsArray } from '../../../helpers/BlogsHelper';
import { BlogCommentSection } from '../../components/Blog/BlogCommentSection';

export function ActiveStoryPage() {
  const { storyId } = useParams();

  const currentStory = useMemo(() => {
    return blogsArray.find(blog => blog.id === Number(storyId));
  }, [storyId]);

  return (
    <HeaderWithContent>
      <div className="space-y-5">
        <div className="flex justify-center">
          <img src={`/assets/blogs/${currentStory.image}`} alt={currentStory.title} className="hidden aspect-video" />
        </div>
        <div className="text-center text-[1.5rem] font-semibold text-primary-800 lg:text-[2rem]">
          {currentStory.title}
        </div>
        <div className="space-y-5 text-[1.25rem] lg:px-5">
          {currentStory.sections.map(section => (
            <div key={section}>{section}</div>
          ))}
        </div>
        <hr className="border-primary-900" />
        <BlogCommentSection data={currentStory} />
      </div>
    </HeaderWithContent>
  );
}
