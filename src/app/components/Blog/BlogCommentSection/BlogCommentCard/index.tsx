import { BlogCommentData } from '../../../../../types/generated';

interface Props {
  data: BlogCommentData;
}

export function BlogCommentCard({ data }: Props) {
  return (
    <div className="border-b-2 border-primary-950 p-2">
      <div className="flex items-start space-x-2">
        <div className="flex aspect-square w-[50px] items-center justify-center rounded-full bg-primary-950 text-white">
          {data.poster.charAt(0)}
        </div>
        <div className="w-[calc(100%-50px)]">
          <div className="text-[0.90rem] italic text-gray-400">{data.date}</div>
          <div className="text-[1.15rem] font-semibold text-primary-900">{data.poster}</div>
          <div>"{data.comment}"</div>
        </div>
      </div>
    </div>
  );
}
