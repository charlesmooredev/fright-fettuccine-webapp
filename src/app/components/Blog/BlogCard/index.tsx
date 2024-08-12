import { BlogData } from '../../../../types/generated';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../../../helpers/AppRoutes';

interface Props {
  data: BlogData;
}

export function BlogCard({ data }: Props) {
  return (
    <div className="space-y-1 border-b-2 border-primary-950 p-2 lg:flex lg:items-start lg:space-x-2 lg:space-y-0">
      <div className="w-full space-y-3 lg:w-7/12 lg:space-y-4">
        <div className="truncate text-[1.5rem] lg:text-[3.5rem]">{data.title}</div>
        <div className="truncate text-[1.15rem] font-semibold text-primary-900 lg:text-[1.5rem]">{data.poster}</div>
        <div className="line-clamp-2 text-[0.90rem] italic lg:line-clamp-4">
          {data.sections.map((section, index) => (
            <div key={`${data.id}-${index}`}>{section}</div>
          ))}
        </div>
        <div>
          <NavLink to={`${AppRoutes.ActiveStory}${data.id}`} className="font-semibold hover:underline lg:block">
            Read More
          </NavLink>
        </div>
      </div>
      <div className="w-full lg:w-5/12">
        <img src={`/assets/blogs/${data.image}`} className="aspect-video rounded-lg" alt="Image" />
      </div>
    </div>
  );
}
